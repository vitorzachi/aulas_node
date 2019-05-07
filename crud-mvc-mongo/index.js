const express = require("express");
const ejs = require("ejs"); // template html
const bodyParser = require("body-parser"); // pegar parametros do request

const db = require("./repositories/ConnectionDB");

const server = express();

server.set("views", __dirname + "/views"); // especifica onde estarão os html
server.set("view engine", "ejs"); // diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({ extended: true }));
server.use("/uf", require("./controllers/UnidadeFederativaController"));
server.use("/cidade", require("./controllers/CidadeController"));

db.initDB(() => {
  server.listen(3000);
  console.log('app iniciado');
});
