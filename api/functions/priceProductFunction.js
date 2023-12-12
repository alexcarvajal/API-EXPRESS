const brandSchema = require('../schemas/brandSchema');
const productSchema = require('../schemas/productSchema');

 const getSpecialPrice = async (userID, nameProduct) => {
    const product = await productSchema.findOne({ name: nameProduct }).exec();
    if (!product.available) return 'Out of stock';
    const brand = await brandSchema.find({ specialDiscountBrand: userID }).exec();
    if (!brand.length) return product.price;
    for (const i of brand) {
        if (i.id === product.brand.toString()) {
            return product.specialDiscountProduct;
        }
        else {
            return product.price;
        }
    }
}

module.exports={
    getSpecialPrice
}