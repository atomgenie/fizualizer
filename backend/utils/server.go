package utils

import "net/http"

// MapResponse Map the response
func MapResponse(w *http.ResponseWriter) {
	(*w).Header().Add("access-control-allow-origin", "*")
	(*w).Header().Set("Content-Type", "application/json")
	(*w).Header().Add("access-control-allow-methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
	(*w).Header().Set("status", "ok")
	(*w).Header().Add("Access-Control-Allow-Headers", "*")

}
