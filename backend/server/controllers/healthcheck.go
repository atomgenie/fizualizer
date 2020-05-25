package controllers

import (
	"fizualizer/utils"
	"net/http"
)

// HandleHealthcheck handle healthcheck
func HandleHealthcheck(w http.ResponseWriter, r *http.Request) {

	utils.MapResponse(&w)
	if r.Method == "OPTIONS" {
		return
	}

}
