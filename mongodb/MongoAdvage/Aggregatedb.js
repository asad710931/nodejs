const client = require('../db_connection');

//aggregation
const aggregatedb=async(query)=>{
    try {
        await client.connect();
        let db=await client.db('app');
        let result=await db.collection('info').aggregate(query).toArray()
       return result;
    } finally{
        await client.close()
    }
}


module.exports={
    aggregatedb,
}