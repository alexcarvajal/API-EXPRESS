const express = require('express');
const app = express();


//Routes
const PRODUCTOS= [{
    id:1,
    name:'laptop'
},
]

app.get('/products',(req,res)=>{
    console.log('Listening products')
    res.json({
        status:'success',
        data:  {
            products:PRODUCTOS
        }
    })
})

app.listen(3000,()=>{

})