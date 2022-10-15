//const http=require('http');

const express=require('express');

const apps=express();

apps.use((req, res, next )=>{
    console.log('in the middleware!');
    next();//allows to continue to the next middleware in line

});
apps.use((req, res, next )=>{
    console.log('in the another middleware!');
    res.send('<h1>Hello from express.js!</h1>');
   // res.send( { key1: 'arjun' });

});

apps.listen(3001);