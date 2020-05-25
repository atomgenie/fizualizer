package server

import (
	"net/http"
	"os"
	"path"
	"path/filepath"
)

// HandleServer HandleServer
func HandleServer(bind string, serverBind string) {

	ex, _ := os.Executable()
	backendServer := http.NewServeMux()
	frontendServer := http.NewServeMux()
	initTouter(backendServer)
	staticsFiles := http.FileServer(http.Dir(path.Join(filepath.Dir(ex), "build")))

	frontendServer.Handle("/", staticsFiles)

	go func() {
		http.ListenAndServe(":"+bind, frontendServer)
	}()

	http.ListenAndServe(":"+serverBind, backendServer)
}
