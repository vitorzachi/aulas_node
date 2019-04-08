const Cidade = require('../models/Cidade');
const ufController = require('./UnidadeFederativaController');
const cidades = [];


const salvar = (request, response) => {
    const cid = new Cidade(
        request.body.id || new Date().getTime(),
        request.body.nome,
        ufController.ufById(request.body.uf));

        cidades.push(cid);

    response.redirect('/cidade/lista');
}

const lista = (request, response) => {
    response.render('cidade/lista', {list: cidades});
}

const cadastro = (request, response) => {
    response.render('cidade/cadastro', {ufs: ufController.getUfs()});
}

module.exports.cadastro = cadastro;
module.exports.lista = lista;
module.exports.salvar = salvar;
module.exports.cidades = ()=>{
    return cidades;
   };