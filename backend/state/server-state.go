package state

import (
	"context"
	firebasehelper "fizualizer/firebase"
	"sync"

	"cloud.google.com/go/firestore"
)

// ServerState Type of the server state
type ServerState struct {
	client *firestore.Client
	ctx    context.Context
	mux    sync.Mutex
}

var serverState ServerState = ServerState{
	client: nil,
}

// GetFirestore Get firestore instance
func GetFirestore() *firestore.Client {
	return serverState.client
}

// SetFirestore Set the firestore insta,ce
func SetFirestore(client *firestore.Client) {
	serverState.mux.Lock()
	if serverState.client != nil {
		firebasehelper.CloseFirestore(serverState.client)
	}
	serverState.client = client
	serverState.mux.Unlock()
}

// SetContext Set context
func SetContext(ctx context.Context) {
	serverState.mux.Lock()
	serverState.ctx = ctx
	serverState.mux.Unlock()
}

// GetContext get the context
func GetContext() context.Context {
	return serverState.ctx
}
