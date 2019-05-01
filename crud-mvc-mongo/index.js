const express = require("express");
const ejs = require("ejs"); // template html
const bodyParser = require("body-parser"); // pegar parametros do request

const ufController = require("./controllers/UnidadeFederativaController");
const cidadeController = require("./controllers/CidadeController");
const db = require("./repositories/ConnectionDB");

const server = express();

server.set("views", __dirname + "/views"); // especifica onde estarão os html
server.set("view engine", "ejs"); // diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({ extended: true }));

server.get("/uf/lista", ufController.lista);
server.get("/uf/cadastro", ufController.cadastro);
server.post("/uf/salvar", ufController.salvar);

server.get("/cidade/lista", cidadeController.lista);
server.get("/cidade/cadastro", cidadeController.cadastro);
server.post("/cidade/salvar", cidadeController.salvar);

db.initDB(() => {
  server.listen(3000);
  console.log('app iniciado');
});
