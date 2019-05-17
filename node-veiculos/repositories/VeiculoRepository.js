const db = require("./ConexaoBD");
const Veiculo = require("../models/Veiculo");

const salvar = function (veiculo, callback) {
  db.getDB()
    .collection("Veiculos")
    .insertOne(veiculo, (err, result) => {
      if (err) throw err;

      if (callback && typeof callback == "function") {
        callback();
      }
    });
};

const listar = function (callback) {
  db.getDB()
    .collection("Veiculos")
    .find()
    .toArray((err, results) => {
      if (callback && typeof callback == "function") {
        callback(results);
      }
    });
};

const getTodosRegistros = async function () {
  let ret = [];
  const v = await db.getDB()
    .collection("Veiculos")
    .find()
    .toArray();

  v.forEach(u => {
    ret.push(new Veiculo(u.id, u.placa, u.proprietario, u.marca, u.modelo, u.ano));
  });

  return ret;
};

module.exports = {
  salvar: salvar,
  listar: listar,
  getTodosRegistros: getTodosRegistros
};
