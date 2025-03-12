//Including required modules
const express = require('express');
const path = require('path');
const moment = require('moment');
const sqlite3 = require('sqlite3').verbose();
const bodyParser=require('body-parser');


//Make instant of express as app
const app = new express();

//setup express use

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
const time = moment.defaultFormat
console.log(time);

//sqlite connetion
const db = new sqlite3.Database('sqlitedb/manage.sqlite',(err)=>{
    if(err) throw err;
    console.log('connect to memory db')
});

 // Selecting data from DB 
 const sqlite_select=()=>{
    db.all('SELECT * FROM appuser',(err,result)=>{
        if(err){throw err}
        else{
            console.log(result);
        }
    });
 }
 //select as test
 const select=()=>{
    db.all('SELECT * FROM appuser ORDER BY phone',(err,result)=>{
        if(err){throw err}
        else{
            console.log(result);
        }
    });
 }
//function for creating table
const sqlite_table=()=>{
    db.run('CREATE TABLE appuser(id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT NOT NULL UNIQUE,email TEXT,phone TEXT NOT NULL,info TEXT)',(err)=>{
        if(err){
            throw err;
        }else{
            console.log('table created')
        }
      });
}
//insert Data into table
const sqlite_insert=()=>{
    let name=['atik','ahad','romi','nushad'];
    let email=['atik@gmail.com','ahad@gmail.com','romi@gmail.com','nushad@gmail.com'];
    let phone=['+8801919710345','+8801619346931','+880181934541','+8801615710043'];
    let info=['atik store','ahad store','romi store','nushad store'];

    let sql=`INSERT INTO appuser(username,email,phone,info) VALUES(?,?,?,?)`;
   for(let i = 0;i<4;i++){
    db.run(sql,name[i],email[i],phone[i],info[i],(err)=>{
        console.log('inserted data into db');
    });
   }
}
//Update data from database
const sqlite_update=()=>{
    db.run('UPDATE appuser SET username=? WHERE id=?',['arfad',2],(err)=>{
        if(err){throw err}
        console.log('data updated');
    })
}

//Delete Data from database
const sqlite_delete=()=>{
    let sql='DELETE FROM appuser WHERE id=?';
    let id=0;
    db.run(sql,id,(err)=>{
        if(err){throw err}
        console.log('row Deleted');
    });
}

//sqlite_table();
sqlite_insert();
//sqlite_delete();
//sqlite_update();
//sqlite_select();
//select();



const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server started at : '+port)
});
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./','index.html'))
  //res.end('Server running')
})


db.close();


