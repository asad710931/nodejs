import express from 'express'
import path from 'path'
import '@tensorflow/tfjs-node';
import * as canvas from 'canvas'
import * as faceapi from 'face-api.js';
import multer from 'multer';
import cors from 'cors'
import { error } from 'console';

const app = express()
app.use(cors())

const upload=multer({
    dest:'./public/upload/',
    fileFilter:function (req, file,callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null,true)
}})

app.post('/upload', upload.single('file'), async(req,res)=>{

     try {
        if(req.file){
            res.send({
                status:true,
                message:'file uploaded',
                fileData:req.file.filename
            });
        }else{
            res.status(500).send({
                status:false,
                message:'upload failed'
            })
        }
    } catch (error) {
         res.status(500).send({
            status:false,
            message:callback
        })
    } 
})

app.get('/upload',(req,res)=>{

})


app.get('/',(req,res)=>
 res.send('hello')
)

const {Canvas,Image,ImageData} = canvas
faceapi.env.monkeyPatch({Canvas,Image,ImageData})


//console.log(faceapi.nets)



console.log()

let Port=process.env.PORT||3030

app.listen(Port)