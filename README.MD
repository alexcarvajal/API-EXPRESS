# APINODEJS

## Project structure

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
---
## Endpoints 

### /api/products
-   Path that returns the array with the products.
### /api/users
-   Path that returns the created users.
### /api/price/{user_ID}/{nombre_producto}
-   Route that returns the price with or without the discount or if out of stock


--- 
## Environment variables

| NAME   | TYPE   |
| -------- | ------ |
| USER     | String |
| PASSWORD | String |
| PORT     | INT    | 

For security reasons, usernames and passwords are stored in the .env file

---

## Dependencies

   -   dotenv: "^16.3.1",
   -   express: "^4.18.2",
   -   mongoose: "^8.0.3",
   -   nodemon: "^3.0.2"-
   -   uuid: "^9.0.1"


