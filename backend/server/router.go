package server

import (
	"fizualizer/server/controllers"
	"net/http"
)

func initTouter(server *http.ServeMux) {
	server.HandleFunc("/healthcheck", controllers.HandleHealthcheck)
	server.HandleFunc("/firebase", controllers.HandleFirestore)
	server.HandleFunc("/collection", controllers.HandleGetCollection)
	server.HandleFunc("/document", controllers.HandleGetDocument)
	server.HandleFunc("/list", controllers.ListCollection)
}
