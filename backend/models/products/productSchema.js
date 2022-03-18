//hämtar hem mongoose som hjälper oss skapa ett Schema
const mongoose = require('mongoose');
//
const productSchema = mongoose.Schema({
  //namnet för varje prukdt måste vara unikt
  name:     { type: String, required: true, unique: true },
  desc:     { type: String, required: true },
  price:    { type: Number, required: true },
  imageURL: { type: String, required: true },

}, { timestamps: true })

//exporterar modellen och ger min collection namnet "Product(s)"
module.exports = mongoose.model('Product', productSchema)