package main

import (
	"fizualizer/server"
	"flag"
)

func main() {

	port := flag.String("port", "3000", "The port of the server")
	serverPort := flag.String("server-port", "8938", "The port of the server")

	flag.Parse()

	server.HandleServer(*port, *serverPort)
}
