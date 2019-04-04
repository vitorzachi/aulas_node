var http = require("http");
const url = require("url");
var fs = require("fs");

http
  .createServer(function(request, response) {
    //
    if (request.method == "POST") {
      // estou enviando dados para calcular

      request.on("data", function(buffer) {
        var params = buffer.toString();

        console.log(params);

        var objetoParams = new url.URLSearchParams(params);
        console.log(objetoParams.get("valor1"));
        console.log(objetoParams);

        var valor1 = parseFloat(objetoParams.get("valor1") || 0); // pegar o valor 1
        var valor2 = parseFloat(objetoParams.get("valor2") || 0); // pegar o valor 2

        var resultado = valor1 + valor2;

        response.write("O resultado é " + resultado);
        response.end();
      });
    } else {
      // estou recebendo um GET(teoricamente)
      // abrir página do form

      fs.readFile("index.html", function(erro, buffer) {
        if (erro) {
          response.write("Erro ao acessar arquivo index");
        } else {
          response.write(buffer.toString());
        }

        response.end();
      });
    }
    //
  })
  .listen(3000);
