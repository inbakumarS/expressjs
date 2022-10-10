const fs= require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>my message</title></head>');
        res.write('<p>Welcome Home</p>');
        //res.write(`<body>${data}</body>`);
        res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>`);
        res.write('</html>')
        return res.end(); 
    }
       else if(url==='/message' && method==='POST'){

            const body=[];
            req.on('data',(chunk)=>{
                console.log(chunk);
                body.push(chunk);
            });
            req.on('end',()=>{
                const parsedBody=Buffer.concat(body).toString();
               // console.log('parsedBody>>>>>>>',parsedBody);
                const message=parsedBody.split('=')[1];
                fs.writeFile('message.txt',message,err=>{
                    res.statusCode=302;
                    res.setHeader('Location','/');
                    return res.end();
                });

             } );

        }else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>my first page</title></head>');
        res.write('<body><form action="/message" method="POST">Welcome to my Node Js project</body>');
        res.write('</html>')
        res.end();
        }
}
    //DIFFERENT WAYS TO EXECUTE THE MODULE
//module.exports=requestHandler;
/*module.exports={
    handler:requestHandler,
    handler:this.sometext
}*/
//exports.handler=requestHandler;
module.exports.handler=requestHandler;

module.exports.sometext='some hard work needed';

console.log('hello node js');