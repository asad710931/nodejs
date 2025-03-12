const express = require('express');
const dotenv = require('dotenv').config()
const path = require('path')

const app = express()

app.use(express.json())
app.use('/',express.static(path.join(__dirname,'public')))

app.use('/openai',require('./routes/generatorAI'))



//port and server starter
const port = process.env.PORT||5000;
app.listen(port,()=>console.log('Server started...at : ',port))

