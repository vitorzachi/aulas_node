const Cidade = require('../models/Cidade');
const ufController = require('./UnidadeFederativaController');
const UnidadeFederativa = require("../models/UnidadeFederativa");

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
    Promise.all([ufController.getUfs()]).then((ufs) => {
        let ret = [];
        ufs[0].forEach(u => {
            ret.push(new UnidadeFederativa(u.id, u.nome, u.sigla));
          });
        response.render('cidade/cadastro', {ufs: ret});
    })
}

module.exports.cadastro = cadastro;
module.exports.lista = lista;
module.exports.salvar = salvar;
module.exports.cidades = ()=>{
    return cidades;
   };