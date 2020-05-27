package controllers

import (
	"context"
	"encoding/json"
	firebasehelper "fizualizer/firebase"
	"fizualizer/state"
	"fizualizer/utils"
	"fmt"
	"net/http"

	bootstrap "github.com/asticode/go-astilectron-bootstrap"
)

type firestorePayload struct {
	URL       string `json:"url"`
	ProjectID string `json:"projectId"`
}

func setFirestore(data firestorePayload) error {

	ctx := context.Background()
	state.SetContext(ctx)
	client, err := firebasehelper.InitFirestore(ctx, data.URL, data.ProjectID)
	if err != nil {
		return err
	}

	state.SetFirestore(client)

	return nil
}

// HandleFirestore HandleFirestore
func HandleFirestore(w http.ResponseWriter, r *http.Request) {
	utils.MapResponse(&w)

	if r.Method == "OPTIONS" || r.Method == "GET" {
		return
	}

	if r.Method != "POST" {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	var data firestorePayload

	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = setFirestore(data)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, err.Error())
		return
	}

}

// HandleFirestoreElectron Handle with electron
func HandleFirestoreElectron(m bootstrap.MessageIn) bool {
	var data firestorePayload

	err := json.Unmarshal(m.Payload, &data)
	if err != nil {
		return false
	}

	err = setFirestore(data)
	return err == nil
}
