const express = require("express");
const ejs = require("ejs"); // template html
const bodyParser = require("body-parser");// pegar parametros do request

const pessoaController = require('./controllers/pessoaController');

const server = express();

server.set("views", __dirname + "/views");// especifica onde estarão os html
server.set("view engine", "ejs");// diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({ extended: true }));

// ***** * bloco refatorado

var pessoas = [];
pessoas.push({nome: 'teste'});
pessoas.push({nome: 'kkk'});

global.lista = pessoas;

server.get('/', pessoaController.inicio);
server.get('/pessoa/lista', pessoaController.lista);
server.get('/pessoa/novo', pessoaController.cadastro);

server.listen(3000);