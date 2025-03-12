const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.end('Hello Nodejs home');
    console.log('server started');
 });

 //using parameter to get data 
 app.get('/user/:name/:age',(req,res)=>{
     //http://localhost:8080/user/username/29
    res.end(`Hello ${req.params.name} your are ${req.params.age} year old`);
    console.log(req.param);
 });


//using query string on url
app.get('/search',(req,res)=>{
   //http://localhost:8080/search?user=killcode
   //http://localhost:8080/search?user=killcode&age=67
    console.log(req.query);
    res.end(`You Search For : ${req.query.user}`)
});


//changing dir name and use files

const path=require('path');

//to replace directory name
app.use('/public',express.static(path.join(__dirname,'source/htmls')));

app.get('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,'source/htmls','index.html'))
});





app.listen(8080); 