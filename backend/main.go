package main

import (
	"fizualizer/server"
	"flag"
)

func main() {

	port := flag.String("port", "5000", "The port of the server")

	flag.Parse()

	server.HandleServer(":" + *port)
}
