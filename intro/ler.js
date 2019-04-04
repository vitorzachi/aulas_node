

console.log('lendo o arquivo');

var leitor = require('fs');

leitor.readFile('cidades.csv', function (erro, str) {
    if (erro) {
        console.log('erro ao ler arquivo');
    }

    var conteudo = str.toString();
    var linhas = conteudo.split('\n', -1);

    /*
    linhas.forEach(linha => {
        var elementos = linha.split(',', -1);
        if (elementos.length && elementos[1] != undefined) {
            console.log(elementos[1] + ', ' + elementos[3]);
        }
    });
    */

    for (linha of linhas) {
        var elementos = linha.split(',', -1);
        if (elementos.length && elementos[1] != undefined) {
            console.log(elementos[1] + ', ' + elementos[3]);
        }
    }
})