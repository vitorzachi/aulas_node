const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://aula_2019_1:aula2019_1xxe@cluster0-ptgti.mongodb.net/test?retryWrites=true";

var db;

const initDB = function(callback) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if(err) throw err;
    db = client.db("aula_veiculos");
    console.log('Banco conectado');
    if (callback && typeof callback == "function") {
        callback();
      }
  });
};

const getDB = function() {
  if (!db) {
    initDB();
  }
  return db;
};

module.exports = { initDB: initDB, getDB: getDB };