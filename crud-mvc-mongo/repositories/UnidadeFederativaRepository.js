const db = require("./ConnectionDB");
const UnidadeFederativa = require("../models/UnidadeFederativa");

const salvar = function(uf, callback) {
  db.getDB()
    .collection("UnidadeFederativa")
    .insertOne(uf, (err, result) => {
      if (err) throw err;

      if (callback && typeof callback == "function") {
        callback();
      }
    });
};

const listar = function(callback) {
  db.getDB()
    .collection("UnidadeFederativa")
    .find()
    .toArray((err, results) => {
      if (callback && typeof callback == "function") {
        callback(results);
      }
    });
};

const getTodosRegistros = async function() {
  let ret = [];
  const ufs = await db
    .getDB()
    .collection("UnidadeFederativa")
    .find()
    .toArray();

  ufs.forEach(u => {
    ret.push(new UnidadeFederativa(u.id, u.nome, u.sigla));
  });

  return ret;
};
module.exports = {
  salvar: salvar,
  listar: listar,
  getTodosRegistros: getTodosRegistros
};
