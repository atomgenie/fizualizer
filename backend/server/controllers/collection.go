package controllers

import (
	"encoding/json"
	"fizualizer/state"
	"fizualizer/utils"
	"fmt"
	"net/http"

	"google.golang.org/api/iterator"
)

type itemCollection struct {
	Name string `json:"name"`
}

type payloadCollection struct {
	Path []itemCollection `json:"path"`
}

type itemDocuments struct {
	Name string `json:"name"`
}

type collectionResponse struct {
	Documents []itemDocuments `json:"documents"`
}

// HandleGetCollection GetDocsInCollection
func HandleGetCollection(w http.ResponseWriter, r *http.Request) {

	utils.MapResponse(&w)
	if r.Method == "OPTIONS" {
		return
	}

	var data payloadCollection
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if len(data.Path) == 0 {
		return
	}

	client := state.GetFirestore()

	collection := client.Collection(data.Path[0].Name)

	for i := 1; i < len(data.Path); i += 2 {
		if i+1 >= len(data.Path) {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		doc := collection.Doc(data.Path[i].Name)
		collection = doc.Collection(data.Path[i+1].Name)
	}

	documents := collection.Documents(utils.GetCtx())
	response := collectionResponse{Documents: []itemDocuments{}}

	for {
		doc, err := documents.Next()
		if err == iterator.Done {
			break
		}

		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		response.Documents = append(response.Documents, itemDocuments{Name: doc.Ref.ID})
	}

	rawResponse, _ := json.Marshal(response)

	fmt.Fprintf(w, string(rawResponse))

}
