# APINODEJS

## Estructura del proyecto

```
/
|
|- app.js
|- .env
|- /api
|  |- /DataBaseConnection
|    |- MongoDB.js
|
|- |- /functions
|    |- brandFunction.js
|    |- priceProductFunction.js
|    |- productsFunction.js
|    |- userFunction.js
|- |- /routes
|    |- brandsRouter.js
|    |- priceProductRouter.js
|    |- productsRouter.js
|    |- userRouter.js
|    |- index.js
|-  |- /schemas
|    |- brandSchema.js
|    |- productSchema.js
|    |- userSchema.js
```

## Variables de entorno


| NOMBRE   | TYPE   |
| -------- | ------ |
| USER     | String |
| PASSWORD | String |
| PORT     | INT    | 

---
## Endpoints 

### /api/products
### /api/brands
### /api/users
### /api/price/{user_ID}/{nombre_producto}