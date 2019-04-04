
const calcular = (request, response)=> {

    let v1 = parseFloat(request.body.valor1);
    let v2 = parseFloat(request.body.valor2);
    
    const soma = v1 + v2;

    response.render("resultado", {"resultado": soma});
}


const visualizar = (request, response) => {
    response.render("index");
}

module.exports.calcular = calcular;
module.exports.visualizar = visualizar;