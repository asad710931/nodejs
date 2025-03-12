const express = require('express');
const app = new express();
const session = require('express-session');

app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:false,
    cookie:{}
}));

//
app.get('/',(req,res)=>{
    res.send(`Hi this is index.js no user`);
 
 });
app.get('/test',(req,res)=>{
   // user='qwereerfd'
   req.session.count++;
   // req.session.user=user;
   //res.end(`${req.session.count}`);
   // console.log(req.session.count)
   res.send(`Hi ${req.session.user} you visited this site : ${req.session.count} Time`);
   //res.end('server')
});

//reading data by get params
app.get('/user/:user',(req,res)=>{
    req.session.user=req.params.user
    res.send(`Hi ${req.session.user}`);
})

app.get('/pro/:name/:quantity/:rate',(req,res)=>{
    req.session.sid=Math.random(req.session.sid); 
    req.session.userid++;
    req.session.name=req.params.name;
    req.session.quantity=req.params.quantity;
    req.session.rate=req.params.rate;
    let total=req.session.quantity*req.session.rate;
    res.send(`${req.session.userid} Product Name : ${req.session.name} ( ${req.session.quantity} x $${req.session.rate} ) = $${total}`);
});

app.get('/view',(req,res)=>{
    res.send(req.session);
    console.log(req.session)
})

//destroy data that stored in session
app.get('/erase',(req,res)=>{
    if(req.session.user){
       req.session.destroy(()=>{
           res.redirect('/');
       })
    }
})
const PORT=process.env.PORT || 3000;
app.listen(PORT);