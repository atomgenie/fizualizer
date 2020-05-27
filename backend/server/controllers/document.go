package controllers

import (
	"encoding/json"
	"fizualizer/state"
	"fizualizer/utils"
	"fmt"
	"net/http"

	bootstrap "github.com/asticode/go-astilectron-bootstrap"
	"google.golang.org/api/iterator"
)

type itemDocument struct {
	Name string `json:"name"`
}

type payloadDocument struct {
	Path []itemDocument `json:"path"`
}

type payloadItemDocumentCollection struct {
	Name string `json:"name"`
}

type payloadResponseDocument struct {
	ID          string                          `json:"id"`
	Collections []payloadItemDocumentCollection `json:"collections"`
	Data        interface{}                     `json:"data"`
}

func getDocument(data payloadDocument) (payloadResponseDocument, error) {

	client := state.GetFirestore()
	collection := client.Collection(data.Path[0].Name)
	document := collection.Doc(data.Path[1].Name)

	for i := 2; i < len(data.Path); i += 2 {
		if i+1 >= len(data.Path) {
			return payloadResponseDocument{}, fmt.Errorf("Bad request")
		}

		collection = document.Collection(data.Path[i].Name)
		document = collection.Doc(data.Path[i+1].Name)
	}

	response := payloadResponseDocument{Collections: []payloadItemDocumentCollection{}}

	subCollection := document.Collections(utils.GetCtx())

	for {
		collRef, err := subCollection.Next()
		if err == iterator.Done {
			break
		}

		if err != nil {
			return payloadResponseDocument{}, fmt.Errorf("Server error")
		}

		response.Collections = append(response.Collections, payloadItemDocumentCollection{Name: collRef.ID})
	}

	snapshot, _ := document.Get(utils.GetCtx())
	response.ID = document.ID
	response.Data = snapshot.Data()

	return response, nil
}

// HandleGetDocument Get document
func HandleGetDocument(w http.ResponseWriter, r *http.Request) {

	utils.MapResponse(&w)
	if r.Method == "OPTIONS" {
		return
	}

	var data payloadDocument
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if len(data.Path) < 2 {
		return
	}

	response, err := getDocument(data)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := json.Marshal(response)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, string(res))
}

// HandleGetDocumentElectron Handle get document electron
func HandleGetDocumentElectron(m bootstrap.MessageIn) (interface{}, error) {
	var data payloadDocument

	err := json.Unmarshal(m.Payload, &data)
	if err != nil {
		return payloadResponseDocument{}, err
	}

	return getDocument(data)
}

func getListCollection() ([]string, error) {

	client := state.GetFirestore()

	collections := client.Collections(utils.GetCtx())
	listCollection := []string{}

	for {
		collRef, err := collections.Next()
		if err == iterator.Done {
			break
		}

		if err != nil {
			return []string{}, fmt.Errorf("Server error")
		}

		listCollection = append(listCollection, collRef.ID)
	}

	return listCollection, nil

}

// ListCollection Get document
func ListCollection(w http.ResponseWriter, r *http.Request) {

	utils.MapResponse(&w)
	if r.Method == "OPTIONS" {
		return
	}

	listCollection, err := getListCollection()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	res, err := json.Marshal(listCollection)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, string(res))
}

// ListCollectionElectron Get List collection
func ListCollectionElectron() ([]string, error) {
	return getListCollection()
}
