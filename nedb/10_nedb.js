const express = require('express');
const path = require('path');
const nedb = require('nedb');

const database = new nedb('geo.db');
database.loadDatabase()

const app = new express();

app.listen(4000);

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.get('/geo',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','sendData.html'))
});

app.post('/post',(req,res)=>{
    //console.log(req.body);
    let data=req.body;
    database.insert(data);    
    //console.log(data)
    res.json(data)

});

app.get('/getdata',(req,res)=>{
    database.find({},(err,data)=>{
      if(err) throw err;
     // console.log(data)
      res.json(data);
    });
});