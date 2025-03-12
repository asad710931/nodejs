const express = require('express');
const mysql = require('mysql');
const app = express();

//Database connection
const db = mysql.createConnection({
    host     : "fdb33.atspace.me",
    user     : "4119131_kp",
    password : "kp43484348",
    database : "4119131_kp",
    port     : 3306
})

app.get('/',(req,res)=>{
// this route will connect with database
    db.connect((err)=>{
        //one way to test
        const con = err?"error occured":' db connected';
        res.end(con);
 
        //another way to test
        if(err)throw err
        else{res.end("db connected");}
       
        //another way to test
        if(err){
            console.log(err)
        }else{
            res.send("db connected");
        } 
        

    });
});

//creating database on node
app.get('/createdb',function(req,res){
    let sql="CREATE DATABASE nodedb";
    db.query(sql,(err,result)=>{
       if (err) throw err;
       console.log(result);
       res.end('DB Builded');
         
    })
})

//creating table
app.get('/createtable',(req,res)=>{
    let sql="CREATE TABLE post(id int AUTO_INCREMENT,title VARCHAR(47),body VARCHAR(277), PRIMARY KEY (id))";
    db.query(sql,(err,result)=>{
        if (err) throw err;
       console.log(result);
       res.end('Table Builded');
    })
});

//insert data to database
app.get('insert/:title/:body',(req,res)=>{
    console.log(req.params.title);
    res.send('ok')
})

//Starting Server 

const PORT=process.env.PORT || 3306;
app.listen(PORT,()=>{
  console.log('Server running at port 8080');
});