//module for creating server
const http = require('http');
const fs = require('fs');

//creating server
const server = http.createServer((req,res)=>{
   //checking for request server..
   if((req.url=='/')||(req.url=='/index/')||(req.url=='/home/')||(req.url=='')){
      const readhtml=fs.createReadStream('./source/htmls/index.html'); 
      res.writeHead(200,{'content-type':'text/html'})
      readhtml.pipe(res);
   }
   else if((req.url=='/html')||(req.url=='/html/')){
    const readhtml=fs.createReadStream('./source/htmls/index.html'); 
    res.writeHead(200,{'content-type':'text/html'})
    readhtml.pipe(res);
   }
   else if((req.url=='/json')||(req.url=='/json/')){
    const readjson=fs.createReadStream('./source/json/en2bn.json');
    res.writeHead(200,{'content-type':'application/json'});
    readjson.pipe(res);
   }
   else if(req.url=='/image'){
      const readimg=fs.createReadStream('./source/images/image.jpg');
      res.writeHead(200,{'content-type':'image/jpg'});
      readimg.pipe(res)
   }else{
      const readhtml=fs.createReadStream('./source/htmls/nopage.html'); 
      res.writeHead(200,{'content-type':'text/html'})
      readhtml.pipe(res);
   }


});
//server running at 3000
let port = process.env.PORT || 3000
server.listen(3000,()=>console.log('server running at port 3000'));


