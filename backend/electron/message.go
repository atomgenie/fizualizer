package electron

import (
	"fizualizer/server/controllers"

	"github.com/asticode/go-astilectron"
	bootstrap "github.com/asticode/go-astilectron-bootstrap"
)

// HandleMessages handles messages
func HandleMessages(_ *astilectron.Window, m bootstrap.MessageIn) (payload interface{}, err error) {
	switch m.Name {
	case "setFirestore":
		ok := controllers.HandleFirestoreElectron(m)
		payload = ok
	case "listCollection":
		payload, err = controllers.ListCollectionElectron()

	case "getDocument":
		payload, err = controllers.HandleGetDocumentElectron(m)
	case "getCollection":
		payload, err = controllers.HandleGetCollectionElectron(m)
	}

	return
}
