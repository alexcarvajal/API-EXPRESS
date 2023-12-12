const brandSchema = require('../schemas/brandSchema')

 const getBrand = async () => {
    const brand = await brandSchema.find()
    return brand;
}
 const getBrandByID = async (id) => {
    const brand = await brandSchema.findById(id).exec();
    return brand;
}
 const createBrand = async (brand) => {
    const newBrand = new brandSchema({
        ...brand
    });
    await newBrand.save()
    return newBrand;
}
 const updateBrand = async (id, brand) => {
    const brandUpdate = await brandSchema.findOneAndUpdate({ id }, brand).exec();
    return brandUpdate;
}
 const removeBrand = async (id) => {
    await brandModel.findByIdAndDelete(id).exec();
}
 const addUserBrand = async (userID, brandID) => {
    const brand = await brandSchema.findById(brandID).exec();
    const updatedBrand = {
        ...brand,
        specialDiscountBrand: [...brand.specialDiscountBrand, userID],
    };
    await updatedBrand.save();
    return updatedBrand;
}

module.exports={
    getBrand,
    getBrandByID,
    createBrand,
    updateBrand,
    removeBrand,
    addUserBrand
}