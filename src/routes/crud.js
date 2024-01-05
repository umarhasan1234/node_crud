const express=require('express');
const route=express.Router();


const dbConnection=require('../connectionDB');
const http = require('http');


route.get("/crud",(req,res)=>{
    res.send("crud start");
})
const getUsersQuery = 'SELECT * FROM users';

route.get("/api/user",(req,res)=>{
    dbConnection.query(getUsersQuery, (error, results, fields) => {
        if (error) {
          console.error('Error fetching data: ', error);
          res.status(500).send('Internal Server Error');
          throw error;
        }

        // Send the fetched data as JSON
        res.json(results);

        dbConnection.end();

      });
})








module.exports=route;


