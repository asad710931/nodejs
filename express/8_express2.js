const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const app = express();
app.listen(3030);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json({limit:'2mb'}));

app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','form.html'));
});
app.get('/geo',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','sendData.html'));
});
app.post('/post',(req,res)=>{
    console.log(req.body);
    const data=req.body;
   // console.log(data.lat);
    res.json({data});
});



