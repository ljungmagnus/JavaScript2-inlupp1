//importerar Express som är ett ramverk för Node. Express underlättar skapandet av en webbserver med Node. 
const express = require('express');
//initialiserar Express
const app = express();
//hämtar cors paketet för att kunna köra på annan port 
const cors = require('cors');


const productController = require('./controllers/productCtrl');


//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CONTROLLERS
app.use('/api/products', productController)


//exporterar för att kunna importera i min server.js för att kunna lyssna på ändringar 
module.exports = app