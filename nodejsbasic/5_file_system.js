
const fs = require('fs'); 

//creating and reading file

fs.writeFile('node1.txt',"Node is backend server site language",(err)=>{
  if(err){
      console.log(err);
  }else{
      console.log('file created');
            //reading buffer encoded file  

      fs.readFile('node.txt','utf8',(err,file)=>{
          if(err){
              console.log(err);
          }else{
            console.log(file);

          }
      })
  }
});

//===============================

//=========Reading files==========

//reading as buffer

fs.readFile('node.txt',(err,file)=>{
    if(err){
        console.log(err);
    }else{
        console.log(file);
    }
})

//Reading encoded files
fs.readFile('node.txt','utf8',(err,file)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`\n${file}`);
    }
})
//==========Renaming file==============

fs.rename('test.txt','node.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File renamed');
    }
}) 

//=====appending files with new resource=========


fs.appendFile('node.txt',"\nSome new text,",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successfully appended')
    }

}); 


//========delete file==========
fs.unlink('node1.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file deleted successfully')
    }
});

//===========dir create and delete=====
fs.mkdir('node_tut',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('directory created');
    }
});
fs.rmdir('node_tut',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('directory removed');
    }
}); 



//=========create file under dir====


 fs.writeFile('./node_tut/test.txt',"new node text",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
}); 

//=========Remove file with directory========= 
fs.unlink('./node_tut/test.txt',err=>{
    if(err){
        console.log(err);
    }else{
        fs.rmdir('node_tut',(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('Dir removed')
            }
         });
        
    }
});
 //==================loop throw directroy and remove file======

 fs.readdir('textfiles',(err,files)=>{
    if(err){
        console.log(err);

    }else{
        files.forEach(file => {
            fs.unlink('./textfiles/'+file,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('file deleted');
                }

            });

        });
       for(let file of files){
        fs.unlink('./textfiles/'+file,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('file deleted');
            }
        });
       }
    }
})






