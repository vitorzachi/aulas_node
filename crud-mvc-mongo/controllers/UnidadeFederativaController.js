var express = require('express');
var router = express.Router();
const UnidadeFederativa = require("../models/UnidadeFederativa");
const repo = require("../repositories/UnidadeFederativaRepository");

router.post("/salvar", (request, response) => {
  const uf = new UnidadeFederativa(
    request.body.id || new Date().getTime(),
    request.body.nome,
    request.body.sigla
  );

  repo.salvar(uf, () => {
    response.redirect("/uf/lista");
  });
});

router.get( "/lista", (request, response) => {
  repo.listar(ufs => {
    response.render("uf/lista", { list: ufs });
  });
});

router.get("/cadastro", (request, response) => {
  response.render("uf/cadastro");
});

module.exports = router;
