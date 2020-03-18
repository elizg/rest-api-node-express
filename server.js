const express = require("express");
var app = express(); // using const may add middleware

// first GET route - define callback for it
// cb receives two parameters, req receives all info sent from client, res contains all info send back to client
app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.get("/customer", (req, res) => {
    res.send("customer test");
});

app.get("/username", (req, res) => {
    res.send("username test");
});

app.post("/", (req, res) => {
    res.send("Hello POST call res");
});

app.put("/", (req, res) => {
    res.send("PUT test");
});

app.delete("/", (req, res) => {
    res.send("DELETE test");
})

app.listen("8080", () => {
    console.log("Server started");
});