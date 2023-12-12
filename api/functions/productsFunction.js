const productSchema = require('../schemas/productSchema')
const brandSchema = require('../schemas/brandSchema')

const { v4: uuidv4 } = require('uuid');
let products = []
 const getProducts = async () => {
    products = await productSchema.find()
    return products;
}
 const getProductByID = async (id) => {
    try {
        const product = await productSchema.findById(id);
        return product;
    } catch (error) {
        // Manejo de errores, por ejemplo:
        console.error(error);
        throw new Error('Ocurrió un error al buscar el producto');
    }
}
 const createProduct = async (product) => {
    const brand = await brandSchema.find({ name: product.brand }).exec();
    const specialPricing = (product.price * brand[0].specialDiscountBrand) / 100;
    const newProduct = new productSchema({
        ...product,
        brand: brand[0].id,
        specialPricing: product.price - specialPricing,
        id: uuidv4(),
    });
    await newProduct.save()
    products.push(newProduct);
    return newProduct;
}

 const updateProduct = async (id, product) => {
    const productUpdate = await productSchema.findOneAndUpdate({ id }, product).exec();
    return productUpdate;
}
 const deleteProduct = async (id) => {
    await productSchema.findByIdAndDelete(id).exec();
}
module.exports ={
    getProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
}