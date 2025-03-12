const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

//creating csv file
const writefile = fs.createWriteStream('data.csv');

//writing header
writefile.write(`id,Name,link\n`);

request('http://127.0.0.1:5500/UX_design/index.htm',(err,res,data)=>{
  if(!err && res.statusCode == 200){
     const $=cheerio.load(data);
     const body=$('.body');
    //const output=body.find('a').text()
    // const output=body.children('div').next().html() 
    // const output=body.children('div').next().html() 
    // const output=body.children('div').parent().text() 
    //console.log(output);


    $('li a').each((i,el) => {
        const link = $(el).text();
        const url = $(el).attr('href');
       // const clas = $(el)
        writefile.write(`${i} ${link},${url}\n`);
        
    });

  }


});