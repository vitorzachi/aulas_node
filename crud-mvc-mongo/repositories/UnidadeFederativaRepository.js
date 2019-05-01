const db = require("./ConnectionDB");

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

const getTodosRegistros = function() {
  return db
    .getDB()
    .collection("UnidadeFederativa")
    .find()
    .toArray();
};
module.exports = {
  salvar: salvar,
  listar: listar,
  getTodosRegistros: getTodosRegistros
};
