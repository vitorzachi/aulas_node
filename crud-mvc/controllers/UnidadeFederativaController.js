const UnidadeFederativa = require('../models/UnidadeFederativa');
const ufs = [];

const salvar = (request, response) => {
    const uf = new UnidadeFederativa(
        request.body.id || new Date().getTime(),
        request.body.nome,
        request.body.sigla);

        ufs.push(uf);

    response.redirect('/uf/lista');
}

const lista = (request, response) => {
    response.render('uf/lista', {list: ufs});
}

const cadastro = (request, response) => {
    response.render('uf/cadastro');
}

module.exports.cadastro = cadastro;
module.exports.lista = lista;
module.exports.salvar = salvar;
module.exports.getUfs = ()=>{
 return ufs;
};

module.exports.ufById = (id) =>{
    return ufs.filter((u) => {
        return parseInt(u.id) == parseInt(id);
    })
}