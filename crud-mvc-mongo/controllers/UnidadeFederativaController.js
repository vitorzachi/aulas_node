const UnidadeFederativa = require("../models/UnidadeFederativa");
const repo = require("../repositories/UnidadeFederativaRepository");

const salvar = (request, response) => {
  const uf = new UnidadeFederativa(
    request.body.id || new Date().getTime(),
    request.body.nome,
    request.body.sigla
  );

  repo.salvar(uf, () => {
    response.redirect("/uf/lista");
  });
};

const lista = (request, response) => {
  repo.listar(ufs => {
    response.render("uf/lista", { list: ufs });
  });
};

const cadastro = (request, response) => {
  response.render("uf/cadastro");
};

module.exports.cadastro = cadastro;
module.exports.lista = lista;
module.exports.salvar = salvar;
module.exports.getUfs = () => {
  return repo.getTodosRegistros();
};

module.exports.ufById = id => {
  return undefined;
};
