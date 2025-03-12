
const client = require('./db_connection.js');

//============insert data in collection in Mongodb==============
const insert=async()=>{
    try{
        //connect to databse
        await client.connect()

        //select database of your work
        let db = await client.db('app');
        
        //Insert data into collection with insertOne or insertMany
        await db.collection('info').insertOne({id:12,name:"Asad Ali",username:"ali"})
        //await db.collection('info').insertMany([{id:11},{id:12},{id:13},{id:14}])
       
        console.log("data inserted into database")

    }finally{
        await client.close()
    }
}

//insert().catch(console.dir())

//module.exports=insert
    

//==============================================================


//=======Delete in Mongosh======================================
const deletedb=async()=>{
    try{
        
        //connect to databse
        await client.connect()

        //select database of your work
        let db = await client.db('app');

       // await db.collection('info') .deleteOne({id:11})
        await db.collection('info').deleteMany({id:12})
        console.log('data deleted')
    }finally{
        await client.close()
    }
}
//deletedb().catch(console.dir)
//==============================================================


//=======Update in Mongosh======================================
let rate=Math.floor(Math.random()*10)

const updatedb=async()=>{
    try{
        await client.connect();
        let db = await client.db('app')
        // update one row of data
        //await db.collection('info').updateOne({id:1},{$set:{name:"Asad Ali",username:"ali"}})
         //update multiple raw of data
        
         //this data is to match on collection of database for for update
        let dataToSelect={name:"Muhammad Asad"}
        //but if you update all data with new data then you have to use empty query
        let dataToSelectAll={}

        //these are the data to change with
        let datatoChange={$set:{name:"Muhammad Asad",username:"ali27"}} 
       // let datatoChange1={$set:{company:{name:"Only Path"}}} 
        let datatoChange1={$set:{rate:rate}} 
       //update to only one field
        await db.collection('info').updateOne(dataToSelect,datatoChange1);
        //to update all field with new data
        await db.collection('info').updateMany(dataToSelect1,datatoChange1);


        console.log(count)
    }finally{
        await client.close()
    } 
}
//updatedb().catch(console.dir)
//==============================================================


//===================Replace in Mongosh=========================
const replacedb = async()=>{
    try {
        //connect to databse
        await client.connect();

        //select database of your work
        let db = await client.db('app');
        
        //replace old data with new data
        await db.collection('info').replaceOne({username:"sahed34"},{id:13,name:"Sahed Ali",username:"sahed34"})
        console.log("Data has been replaced")
    } finally {
        await client.close();
    } 

}
//replacedb().catch(console.dir);

//==============================================================


//=======Query/Find/Get Data from collection in Mongodb=========

const querydb=async()=>{
    try{
        //connect to databse
        await client.connect()

        //select database of your work
        let db = await client.db('app');

        //select one single raw from collection info
        const data=await db.collection('info').findOne();
        
        //select limited raw from collection
        const datas1=await db.collection('info').find({}).limit(5).toArray();

        //Select raw using query 
        const datas2=await db.collection('info').find({rate:4}).toArray();

        let options={
            //0 to field exclude 1 to include
            projection:{_id:0,name:1,email:1,address:{city:1}},
        }
        const res=await db.collection('info').find({name:"Muhammad Asad"},options).toArray() 
        //console.log(count)
        
        

    }finally{
        await client.close()
    }

}
//querydb().catch(console.dir())

//==============================================================


//==============mongodb Aggregate Data from Documents===========

const Aggregatedb=async()=>{
    try {
        //connection to databse
        await client.connect();

        //select database to work
        let db = await client.db('app');

        //count in mongodb using 
        const TotalFiled=await db.collection('info').aggregate([{'$count':'totalRaw'}]).toArray()
        console.log(TotalFiled[0].totalRaw)
       
    }finally{
        await client.close()

    }
}

//Aggregatedb().catch(console.dir)

//==============================================================


module.exports={
    insert,
    deletedb,
    updatedb,
    replacedb,
    Aggregatedb,
    querydb
}
