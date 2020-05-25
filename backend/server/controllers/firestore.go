package controllers

import (
	"context"
	"encoding/json"
	firebasehelper "fizualizer/firebase"
	"fizualizer/state"
	"fizualizer/utils"
	"fmt"
	"net/http"
)

type firestorePayload struct {
	URL       string `json:"url"`
	ProjectID string `json:"projectId"`
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

	ctx := context.Background()
	state.SetContext(ctx)
	client, err := firebasehelper.InitFirestore(ctx, data.URL, data.ProjectID)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, err.Error())
		return
	}

	state.SetFirestore(client)
}
