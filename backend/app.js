//importerar Express som är ett ramverk för Node. Express underlättar skapandet av en webbserver med Node. 
const express = require('express');
//initialiserar Express
const app = express();
//hämtar cors paketet för att kunna köra på annan port 
const cors = require('cors');


const productController = require('./controllers/productCtrl');


//MIDDLEWARE
//behöver cors för att tillåtas hämta data från en annan port/adress än den angivna lokala servern 
//i detta fall localhost:8080. Min frontend app kommer att ligga på en annan port.  
app.use(cors());
//hämtar hem urlencoded för att kunna läsa inkommande textsträng och arryer 
app.use(express.urlencoded({ extended: false }));
//hämter hem json för att min applikaion ska kunna läsa inkommande JSON data
app.use(express.json());

//CONTROLLERS
app.use('/api/products', productController)


//exporterar för att kunna importera i min server.js för att kunna lyssna på ändringar 
module.exports = app