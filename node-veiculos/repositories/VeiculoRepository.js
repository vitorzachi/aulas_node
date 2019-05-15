import { getDB } from "./ConexaoBD";
import Veiculo from "../models/Veiculo";

const salvar = function (veiculo, callback) {
  getDB()
    .collection("Veiculos")
    .insertOne(veiculo, (err, result) => {
      if (err) throw err;

      if (callback && typeof callback == "function") {
        callback();
      }
    });
};

const listar = function (callback) {
  getDB()
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
  const v = await getDB()
    .collection("Veiculos")
    .find()
    .toArray();

  v.forEach(u => {
    ret.push(new Veiculo(u.id, u.placa, u.proprietario, u.marca, u.modelo, u.ano));
  });

  return ret;
};


export const salvar = salvar;
export const listar = listar;
export const getTodosRegistros = getTodosRegistros;