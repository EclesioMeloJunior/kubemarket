package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	var PORT string

	if PORT = os.Getenv("PORT"); PORT == "" {
		PORT = "3001"
	}

	http.HandleFunc("/", HelloServer)
	http.ListenAndServe(":"+PORT, nil)
}

// HelloServer - Startup function from tribes
func HelloServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World")
}
