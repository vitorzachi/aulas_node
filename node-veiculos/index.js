var express = require('express');
var exphbs = require('express-handlebars');
const bodyParser = require("body-parser");// pegar parametros do request
const db = require("./repositories/ConexaoBD");

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static('assets')); // arquivos sem controller


app.use('/', require('./controllers/IndexController'));
app.use('/veiculo', require('./controllers/VeiculoController'));


db.initDB(() => {
  app.listen(3000);
  console.log('app iniciado');
});