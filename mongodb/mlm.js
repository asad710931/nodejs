const client = require('./db_connection.js')


const updateClientInfo=async(referedBy)=>{
    await client.connect();
    const dbSystem=await client.db('mlm_system')
    let clientStep=await dbSystem.collection('client').findOne({clientName:referedBy},{_id:0,clientName:1,referedBy:1,step:1})//.toArray();
    let referederStep=await dbSystem.collection('client').findOne({referedBy:referedBy},{_id:0,clientName:1,referedBy:1,step:1})//.toArray();
   // if(clientStep){let newstep = clientStep.step+referederStep.step}
    let newstep = clientStep.step+referederStep.step
   // console.log(refereder.step)
    let subTotal= await dbSystem.collection('client').aggregate([
   // {$match:{"referedBy":referedBy}},
    //{totalDirectRef:{$sum:"$totalDirectRef"}}
    {$group:{_id:"$clientName",totalDirectRef:{$sum:"$totalDirectRef"}}}
    ]).toArray()
  // console.log(subTotal)
    await dbSystem.collection('client').updateOne({clientName:referedBy},{$set:{totalDirectRef:findTotalRef[0].total,step:newstep}})

    //await dbSystem.collection('client').updateMany({},{$set:{step:1}})


}

const autoIncreaseId=async(clientName,referedBy)=>{
  await client.connect()
  const dbSystem=await client.db('mlm_system').collection('client');
 // let lastId=await dbSystem.find().sort({_id:1}).toArray()
  let lastId=await dbSystem.aggregate([{$count:"totalrow"}]).toArray();
  
  
  let newId = lastId[0].totalrow
  //await dbSystem.updateOne({clientName:clientName},{$set:{serialId:newId}})
  //console.log(lastId[0].totalrow)
  
  let clientLevel=await dbSystem.findOne({clientName:referedBy},{_id:0,levelId:1})
  let refererLevel=await dbSystem.findOne({referedBy:referedBy},{_id:0,levelId:1})

  let newlevelId = clientLevel.levelId+refererLevel.levelId;

  let findTotalRef= await dbSystem.aggregate([{$match:{"referedBy":referedBy}},{$count:"total"}]).toArray()

  await dbSystem.updateOne({clientName:clientName},{$set:{serialId:newId,levelId:newlevelId}})
  await dbSystem.updateOne({clientName:referedBy},{$set:{totalDirectRef:findTotalRef[0].total}})

 
}
//autoIncreaseId('Boss12','Boss')


const insertData=async()=>{
    let clientName='Boss16'
    let referedBy='Boss1'
    await client.connect()
    const dbSystem=client.db('mlm_system').collection('client');
    let nameMatch=!await dbSystem.findOne({clientName:clientName},{})
     console.log(nameMatch)      
    if(nameMatch==true){
      dbSystem.insertOne({serialId:0,clientName:clientName,balance:150,referedBy:referedBy,levelId:1,totalDirectRef:0,totalSubRef:0,step:1})
      // updateClientInfo(referedBy)
       autoIncreaseId(clientName,referedBy)
       console.log('datainserted...')        
    }else{
      console.log("Client name Already Exits")
    } 

     


}

insertData()







const deleteAll=async()=>{
   await client.connect()
   await client.db('mlm_system').collection('client').deleteMany({balance:150})
   console.log('all deleted')
}
//deleteAll()