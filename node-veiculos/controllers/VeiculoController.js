const router = require('express').Router();
const repo = require('../repositories/VeiculoRepository');
const Veiculo = require('../models/Veiculo')

router.get('/lista', (req, res) => {
    res.render('veiculo/lista');
})

router.get('/novo', (req, res) => {
    res.render('veiculo/novo');
})

router.post('/salvar', (req, res) => {
repo.salvar(new Veiculo(
                req.body.id || new Date().getTime(), 
                req.body.placa,
                req.body.proprietario,
                req.body.marca,
                req.body.modelo,
                req.body.ano
                ), res.redirect('/veiculo/lista'));
})

module.exports = router;