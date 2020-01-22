package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", HelloServer)
	http.ListenAndServe(":8080", nil)
}

// HelloServer - Startup function from tribes
func HelloServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World")
}
