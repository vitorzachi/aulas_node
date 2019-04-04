const express = require("express");
var bodyParser = require('body-parser')
const ejs = require("ejs");

const server = express();
server.set("views", __dirname + "/views");
server.set("view engine", "ejs");
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", function(request, response) {
  response.render("index");
});

server.post("/", function(request, response) {
  let v1 = parseFloat(request.body.valor1);
  let v2 = parseFloat(request.body.valor2);
  response.render("resultado", {resultado: v1 + v2});
});

server.listen(3000);
