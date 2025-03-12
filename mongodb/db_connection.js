
const { MongoClient,ServerApiVersion } = require("mongodb")


//const url="mongodb+srv://asad710931:md01919710931@cluster0.pse3c7y.mongodb.net/?retryWrites=true&w=majority";
const url ="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2";


/*
const client = new MongoClient(url,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
})
*/

const client = new MongoClient(url)

module.exports=client;