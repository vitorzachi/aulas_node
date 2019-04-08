
class UnidadeFederativa {

    constructor(id, nome, sigla){
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }

    nomeComSigla() {
        return this.nome + " - " + this.sigla;
    }
}

// importante: tudo deve ser exportado
module.exports = UnidadeFederativa;