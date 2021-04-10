const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.listen(5000,()=>console.log("listening on 5000"));

//Swagger Configuration
const swaggerOptions = {
    swaggerDefinition :{
        info:{
            title:'Employee API',
            version:'1.0.0'
        }
    },
    apis:['api.js'],
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
 
/**
 * @swagger
 * /Employees:
 * get:
 * description: Get All Employee
 * responses: 
 * 200: 
 * description:Success
 */
app.get('/Employees',(req,res)=>{
    res.send([
        {
            id:1, Name:'Jk'
        },
        {
            id:2,Name:'Jay'
        }
    ])
})