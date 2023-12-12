const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  name: {type: String, required: true},
  discount: {type: Number, required: true},
  specialDiscountBrand: {type: Array, required: false},
});

module.exports = mongoose.model("BrandSchema", BrandSchema);