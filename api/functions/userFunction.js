const { v4: uuidv4 } = require('uuid');

const userSchema = require('../schemas/userSchema');
 const getUser = async () => {
    users = await userSchema.find()
    return users;
} 
const getUserByID = async (id) => {
    const user = await userSchema.findById(id).exec();
    return user;
} 
const createUser = async (user) => {
    const newUser = new userSchema({
        ...user,
        id: uuidv4(),
    });
    await newUser.save()
    return newUser;
} 
const updateUser = async (id, user) => {
    const userUpdate = await userSchema.findOneAndUpdate({ id }, user).exec();
    return userUpdate;
} 
const removeUser = async (id) => {
    await userSchema.findByIdAndDelete(id).exec();
}

module.exports = {
    getUser,
    getUserByID,
    createUser,
    updateUser,
    removeUser
}