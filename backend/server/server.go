package server

import (
	"fmt"
	"net/http"
	"os"
	"path"
)

// HandleServer HandleServer
func HandleServer(bind string, serverBind string, onlyBackend bool) {

	isDev := os.Getenv("IS_FIZUALIZER_DEV")
	ex, _ := os.Executable()
	frontPath := path.Join(path.Dir(ex), "build")

	if len(isDev) == 0 || isDev != "true" {
		frontPath = path.Join(os.Getenv("HOME"), ".fizualizer/backend/build")

	}

	backendServer := http.NewServeMux()
	frontendServer := http.NewServeMux()
	initTouter(backendServer)

	staticsFiles := http.FileServer(http.Dir(frontPath))

	frontendServer.Handle("/", staticsFiles)

	if !onlyBackend {

		go func() {
			fmt.Println("Listening: http://localhost:" + bind)
			http.ListenAndServe(":"+bind, frontendServer)
		}()
	}

	http.ListenAndServe(":"+serverBind, backendServer)
}
