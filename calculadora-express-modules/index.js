const express = require("express");
const ejs = require("ejs"); // template html
const bodyParser = require("body-parser");// pegar parametros do request
const calcController = require('./controllers/calculadora');
const testeController = require('./controllers/teste');
const teste2Controller = require('./controllers/k/teste');

const server = express();

server.set("views", __dirname + "/views");// especifica onde estarão os html
server.set("view engine", "ejs");// diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", calcController.visualizar);
server.post("/", calcController.calcular);

server.get("/teste", testeController.visualizar);
server.get("/teste2", teste2Controller.visualizar);



server.listen(3000);
