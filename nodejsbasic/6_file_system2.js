const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();


// createReadStream use for large files

const readstream=fs.createReadStream('node.txt','utf8');
const writestream=fs.createWriteStream('node1.txt');
readstream.on('data',(data)=>{
    writestream.write(data);
}) 

const readstream=fs.createReadStream('test.txt','utf8');
const writestream=fs.createWriteStream('test2.txt.rar');
readstream.pipe(gzip).pipe(writestream);
console.log('new file writed');

