const {Schema,mongoose} = require('mongoose');
const BrandSchema = require('./brandSchema');

const ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  specialDiscountProduct: {type: Number, required: false},
  stock: {type: Boolean, required: true},
  brand: {type: Schema.Types.ObjectId, ref: BrandSchema},
});

module.exports = mongoose.model("Product", ProductSchema);