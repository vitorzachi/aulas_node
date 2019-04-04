
const express = require('express');

const app = express();
module.exports = app;


app.set('view engine', 'hbs');
app.set('views', __dirname +  'views');


require('./lib/boot')(app, { verbose: !module.parent });
