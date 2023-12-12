const mongoose = require('mongoose');
const host = process.env.USER;
const password = process.env.PASSWORD;

const mongoDB = `mongodb://${host}:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

mongoose
.connect( mongoDB )
.then(() => {
    console.log('DB connected')
})
.catch((err) => {
    console.error("Connection to DataBase failed");
})
