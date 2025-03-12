const express = require('express');
const sqlite = require('sqlite3').verbose();
const file = require('path');
const app = express();
app.use(express.json({limit:'1mb'}));

const db = new sqlite.Database('sqlitedb/manage.sqlite',(err)=>{
    if(err) throw err;
   // console.log('connected with sqlite database');
})


app.get('/get/:username',(req,res)=>{

    sql='SELECT * FROM appuser WHERE username LIKE ?';
    let query=`%${req.params.username}%`;
    db.all(sql,query,(err,rows)=>{
        if(err) throw err
        //const data = res.json({"data":rows});
        //console.log(data);
        
        res.json({
            "message":"success",
            "data":rows
        });
        

  });
});

app.get('/getall',(req,res)=>{

    sql='SELECT * FROM appuser';
    db.all(sql,(err,rows)=>{
        if(err) throw err
        console.log(rows)
        res.json({
            "message":"success",
            "data":rows
        });
  });
});

app.get('/getone/:id',(req,res)=>{
    sql='SELECT * FROM appuser WHERE id = ?';
    db.each(sql,req.params.id,(err,row)=>{
        if(err) throw err;
       // console.log(row.id);
       if(row.id==req.params.id){
        res.send(`User : ${row.username}<br/>Email : ${row.email}`);
       }else{
        res.send(`User Not found`);
       }
        
    })


});

app.get('/',(req,res)=>{
    res.sendFile(file.join(__dirname,'.','index.html'))
}); 

let PORT = process.env.PORT || 3000;
app.listen(PORT);



