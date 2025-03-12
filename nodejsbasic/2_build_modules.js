const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/islam"){
        res.write("In the name of ALLAH");
        console.log('server started...');
        res.end();
    }
    if(req.url==="/"){
        res.write(`root of 3 : ${root(3)}`);
        console.log('server started...');
        res.end();
    }

    if(req.url==="/test"){
        res.write("Working fine");
        console.log('server started...');
        res.end();
    }

});
server.listen(4000);



const root=(number)=>{
    return number*number;
}




/*
//if only one module use below 
module.exports=server;
*/

/*
//---for Multiple modules use
module.exports.root=root;
module.exports.server=server;
*/


//also use object 
module.exports={server:server,root:root}




