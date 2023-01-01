const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });



app.listen(process.env.PORT||3000, function(){
    console.log("Server is running on port 3000");
});