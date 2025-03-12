const client = require('./db_connection.js');
const {insert} = require('./MongoBasic.js');
const {aggregatedb} = require('./MongoAdvage/Aggregatedb.js')

const connect=async()=>{
    await client.connect();
   // console.log(await client.db('app').collection('info').find({}).toArray())  
}

//connect()
let query1=[{
    $group:{
        _id:'$rate',//group by rate in collections if you want all keep _id:''
        count:{$sum:1},//sum of document with specific rate
        total:{$sum:'$id'}
    }
}]


let query =[
    {$match:{rate:{$gt:3,$and,$lt:31} }}
    
]




aggregatedb(query).catch(console.dir)

aggregatedb(query).then(result=>{
    console.log(result)
}).catch(console.dir)


