package firebasehelper

import (
	"context"
	"os"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
)

// InitFirestore Initialise Firebase
func InitFirestore(ctx context.Context, url string, projectID string) (*firestore.Client, error) {
	os.Setenv("FIRESTORE_EMULATOR_HOST", url)
	conf := &firebase.Config{
		ProjectID: projectID,
	}

	grpc.WithInsecure()

	app, err := firebase.NewApp(ctx, conf, option.WithoutAuthentication(), option.WithGRPCDialOption(grpc.WithInsecure()))
	if err != nil {
		return nil, err
	}

	client, err := app.Firestore(ctx)

	return client, err
}

// CloseFirestore Close firestore object
func CloseFirestore(app *firestore.Client) {
	app.Close()
}
