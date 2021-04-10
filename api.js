const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.listen(5000,()=>console.log("listening on 5000"));

//Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        info: {
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
 *   get:
 *     description: Get all Employee
 *     responses: 
 *       200:
 *         description: Success 
 *  
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
});

/**
 * @swagger
 * /Employees:
 *   post:
 *     description: Create an Employee
 *     parameters:
 *     - name: EmployeeName
 *       description: Create an new employee
 *       in: formData
 *       required: true
 *       type: String
 *     responses: 
 *       201:
 *         description: Created 
 *  
 */
 app.post('/Employees',(req,res)=>{
   res.status(201).send();
});
/**
 * @swagger
 * /Employees:
 *   put:
 *     description: Create an Employee
 *     parameters:
 *     - name: EmployeeName
 *       description: Create an new employee
 *       in: formData
 *       required: true
 *       type: String
 *     responses: 
 *       201:
 *         description: Created 
 *  
 */
 app.put('/Employees',(req,res)=>{
    res.status(201).send();
 });
 /**
 * @swagger
 * /Employees:
 *   delete:
 *     description: Create an Employee
 *     parameters:
 *     - name: EmployeeName
 *       description: Create an new employee
 *       in: formData
 *       required: true
 *       type: String
 *     responses: 
 *       201:
 *         description: Created 
 *  
 */
  app.delete('/Employees',(req,res)=>{
    res.status(201).send();
 })
