//const haml = require('hamljs');
//const fs = require('fs');
const express = require('express');
const tl = require('express-tl');
const bodyParser = require("body-parser");// pegar parametros do request

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.engine('tl', tl)
server.set('views', './views') // specify the views directory
server.set('view engine', 'tl') // register the template engine

server.get('/', function(req, res) {
	res.render('index', {
		list: [{nome: 'kkk', sigla: 'oo'}, {nome: 'kkk', sigla: 'oo'}]
	})
})

server.listen(3000);