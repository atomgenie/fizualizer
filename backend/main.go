package main

import (
	"fizualizer/electron"
	"fizualizer/server"
	"flag"
	"fmt"
	"log"

	"github.com/asticode/go-astikit"
	"github.com/asticode/go-astilectron"
	bootstrap "github.com/asticode/go-astilectron-bootstrap"
)

// Constants
const htmlAbout = `Welcome on <b>Astilectron</b> demo!<br>
This is using the bootstrap and the bundler.`

// Vars injected via ldflags by bundler
var (
	AppName            string
	BuiltAt            string
	VersionAstilectron string
	VersionElectron    string
)

// Application Vars
var (
	debug = flag.Bool("d", true, "enables the debug mode")
	w     *astilectron.Window
)

var webMode string = "false"

func main() {

	if webMode == "true" {
		port := flag.String("port", "3000", "The port of fizualizer")
		serverPort := flag.String("server-port", "8938", "The port of the backend server")
		onlyBackend := flag.Bool("only-backend", false, "Only start the backend")

		flag.Parse()

		server.HandleServer(*port, *serverPort, *onlyBackend)

	} else {

		// Parse flags
		flag.Parse()

		// Create logger
		l := log.New(log.Writer(), log.Prefix(), log.Flags())

		// Run bootstrap
		l.Printf("Running app built at %s\n", BuiltAt)
		if err := bootstrap.Run(bootstrap.Options{
			Asset:    Asset,
			AssetDir: AssetDir,
			AstilectronOptions: astilectron.Options{
				AppName:            AppName,
				AppIconDarwinPath:  "resources/icon.icns",
				AppIconDefaultPath: "resources/icon.png",
				SingleInstance:     true,
				VersionAstilectron: VersionAstilectron,
				VersionElectron:    VersionElectron,
			},
			Debug:  true,
			Logger: l,
			MenuOptions: []*astilectron.MenuItemOptions{{
				Label: astikit.StrPtr("File"),
				SubMenu: []*astilectron.MenuItemOptions{

					{Role: astilectron.MenuItemRoleClose},
					{Role: astilectron.MenuItemRoleQuit},
				},
			}, {
				Label: astikit.StrPtr("Edit"),
				SubMenu: []*astilectron.MenuItemOptions{{
					Role: astilectron.MenuItemRolePaste,
				}, {
					Role: astilectron.MenuItemRoleCopy,
				}, {
					Role: astilectron.MenuItemRoleCut,
				}, {
					Role: astilectron.MenuItemRoleSelectAll,
				}, {
					Role: astilectron.MenuItemRoleUndo,
				}, {
					Role: astilectron.MenuItemRoleRedo,
				},
				},
			}},
			OnWait: func(_ *astilectron.Astilectron, ws []*astilectron.Window, _ *astilectron.Menu, _ *astilectron.Tray, _ *astilectron.Menu) error {
				return nil
			},
			RestoreAssets: RestoreAssets,
			Windows: []*bootstrap.Window{{
				Homepage:       "index.html",
				MessageHandler: electron.HandleMessages,
				Options: &astilectron.WindowOptions{
					BackgroundColor: astikit.StrPtr("#333"),
					Center:          astikit.BoolPtr(true),
					Height:          astikit.IntPtr(700),
					Width:           astikit.IntPtr(700),
				},
			}},
		}); err != nil {
			l.Fatal(fmt.Errorf("running bootstrap failed: %w", err))
		}
	}

}
