const express = require("express");
const ejs = require("ejs"); // template html
const bodyParser = require("body-parser");// pegar parametros do request

const server = express();

server.set("views", __dirname + "/views");// especifica onde estarão os html
server.set("view engine", "ejs");// diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", function(request, response) {
    response.render("index");
});

server.post("/", function(request, response){

    let v1 = parseFloat(request.body.valor1);
    let v2 = parseFloat(request.body.valor2);
    
    const soma = v1 + v2;

    response.render("resultado", {"resultado": soma});
});


server.listen(3000);
