package server

import (
	"fizualizer/server/controllers"
	"net/http"
)

func initTouter() {
	http.HandleFunc("/healthcheck", controllers.HandleHealthcheck)
	http.HandleFunc("/firebase", controllers.HandleFirestore)
	http.HandleFunc("/collection", controllers.HandleGetCollection)
	http.HandleFunc("/document", controllers.HandleGetDocument)
	http.HandleFunc("/list", controllers.ListCollection)
}
