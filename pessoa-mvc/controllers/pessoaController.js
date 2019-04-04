
var pessoas = [];
pessoas.push({nome: 'teste'});
pessoas.push({nome: 'kkk'});

const index = function(req, res){
    res.render('index');
}

const lista = function(req, res){
    res.render('lista', {'pessoas': global.lista});
}

const cadastro = (req, res) => {
    res.render('cadastro');
}

// externaliza a função 'index' com o nome de 'inicio'
module.exports.inicio = index; 

// externaliza a função 'lista' com o nome de 'lista'
module.exports.lista = lista; 

// externaliza a função 'cadastro' com o nome de 'cadastro'
module.exports.cadastro = cadastro; 