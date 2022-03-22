const express = require('express');
//hämtar hem Router metoden från express så att vi kan använda oss av GET, PUT, POST, PATCH  
const router = express.Router();
//hämtar hem produktmodellen vi skapat
const productModel = require('../models/products/productModel');

//------------------CRUD - Create, Read, Update, Delete-----------------------------------

//READ - hämta alla produkter från databasen med hjälp av en GET
router.get('/', productModel.getAllProducts);

//READ - hämta en enskild produkt med en GET
router.get('/:id', productModel.getProductById);

//CREATE - lägga till en produkt med en POST
router.post('/', productModel.addNewProduct);

//UPDATE - uppdatera en produkt med en PUT

//DELETE - ta bort en produkt med DELETE
router.delete('/:id', productModel.deleteProduct);


module.exports = router;

