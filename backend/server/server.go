package server

import "net/http"

// HandleServer HandleServer
func HandleServer(bind string) {
	initTouter()
	http.ListenAndServe(bind, nil)
}
