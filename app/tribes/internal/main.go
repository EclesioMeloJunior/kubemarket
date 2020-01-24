package main

import (
	"fmt"
	"html"
	"log"
	"net/http"
)
func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	log.Println("Tribes service started at :8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
