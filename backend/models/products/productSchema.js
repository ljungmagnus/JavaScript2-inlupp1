const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

  name:     { type: String, required: true, unique: true },
  desc:     { type: String, required: true },
  price:    { type: Number, required: true },
  imageURL: { type: String, required: true },

}, { timestamps: true })


module.exports = mongoose.model('Product', productSchema)