const express=require('express');
const bodyParser=require('body-parser');
const apps=express();

apps.use(bodyParser.urlencoded({extended:false}));

apps.use('/add-product',(req , res , next)=>{
    console.log('in the middleware!');

    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>');
});
apps.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
apps.use('/',(req, res, next )=>{
    console.log('in the another middleware!'); 
    res.send('<h1>Hello from express.js!</h1>');
});

apps.listen(3001);