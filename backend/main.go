package main

import (
	"fizualizer/server"
	"flag"
)

func main() {

	port := flag.String("port", "3000", "The port of fizualizer")
	serverPort := flag.String("server-port", "8938", "The port of the backend server")
	onlyBackend := flag.Bool("only-backend", false, "Only start the backend")

	flag.Parse()

	server.HandleServer(*port, *serverPort, *onlyBackend)
}
