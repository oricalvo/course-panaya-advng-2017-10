const express = require("express");
const path = require("path");
const app = express();

app.get("/api/contact", function(req, res) {
    res.json([
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
        ]);
});

app.use(express.static(path.join(__dirname, "..")));

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000, function() {
    console.log("Server is running");
});
