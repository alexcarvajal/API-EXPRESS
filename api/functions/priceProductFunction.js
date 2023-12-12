const brandSchema = require('../schemas/brandSchema');
const productSchema = require('../schemas/productSchema');


const getSpecialPrice = async (userId, productName) => {

    const product = await productSchema.findOne({ 
      name: productName
    }).populate('brand');

    if (!product) {
        throw new Error('Product not found');
      }
    
      if (!product.stock) {
        return 'Out of stock'; 
      }
    
      const brand = await brandSchema.findOne({
        specialDiscountBrand: userId, 
        _id: product.brand  
      });
    
      if (!brand) {
        return product.price;
      }
    
      const specialPrice = product.price - (product.price * brand.discount / 100);
    
      return specialPrice;
    
    };

module.exports= getSpecialPrice
