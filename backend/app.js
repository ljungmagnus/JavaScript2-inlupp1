//importerar Express som är ett ramverk för Node. Express underlättar skapandet av en webbserver med Node. 
const express = require('express');
//initialiserar Express
const app = express();

const productController = require('./controllers/productController');


//MIDDLEWARE


//CONTROLLERS

app.use('/api/products', productController)


//exporterar för att kunna importera i min server.js för att kunna lyssna på ändringar 
module.exports = app