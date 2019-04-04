var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function(request, response) {
    //
    var params = url.parse(request.url, true).query;

    var arquivo = "index.html";

    console.log(JSON.stringify(params));
    if (Object.keys(params).length) {
      arquivo = params.nome;

      if (arquivo) {
        arquivo = arquivo + ".html";
      }
    }

    fs.readFile(arquivo, function(erro, buffer) {
      if (erro) {
        response.write("Erro ao acessar " + arquivo);
        response.end();
      } else {
        response.write(buffer.toString());
        response.end();
      }
    });

    //
  })
  .listen(5000);
