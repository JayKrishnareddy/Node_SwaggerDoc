const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.listen(5000,()=>console.log("listening on 5000"));

//routes
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