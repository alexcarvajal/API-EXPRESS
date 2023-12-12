require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/routes/index')
require('./api/DataBaseConnection/MongoDB');

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.use(express.json());

routes(app);
