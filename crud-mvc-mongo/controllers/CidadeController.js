var express = require('express');
var router = express.Router();
const Cidade = require("../models/Cidade");
const UnidadeFederativa = require("../models/UnidadeFederativa");
const ufRepo = require("../repositories/UnidadeFederativaRepository");

const cidades = [];

router.post("/salvar", (request, response) => {
  ufRepo.ufById(request.body.uf).then(uf => {
    let _uf = [];
    if (uf.length) {
      _uf = uf[0];
    }
    const cid = new Cidade(
      request.body.id || new Date().getTime(),
      request.body.nome,
      new UnidadeFederativa(_uf.id, _uf.nome, _uf.sigla)
    );

    cidades.push(cid);
    response.redirect("/cidade/lista");
  })
});

router.get("/lista", (request, response) => {
  response.render("cidade/lista", { list: cidades });
});

router.get("/cadastro", async (request, response) => {
  let ufs = await ufRepo.getTodosRegistros();

  response.render("cidade/cadastro", { ufs: ufs });
});

module.exports = router;
module.exports.cidades = () => {
  return cidades;
};
