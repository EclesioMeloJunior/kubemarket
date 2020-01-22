package main

import (
	"fmt"
	"net/http"
	"os"
	"github.com/gorilla/mux"
)

func main() {
	var PORT string

	if PORT = os.Getenv("PORT"); PORT == "" {
		PORT = "3001"
	}

	r := mux.NewRouter()

	r.HandleFunc("/tribes", AllTribes).Methods("GET")

	http.HandleFunc("/", HelloServer)
	http.ListenAndServe(":"+PORT, nil)
}

// HelloServer - Startup function from tribes
func HelloServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World")
}

// AllTribes - Startup function from tribes
func AllTribes(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "All Tribes")
}
