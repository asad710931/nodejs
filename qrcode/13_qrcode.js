const qr = require('qrcode');


const urls=['google','facebook','youtube','gmail']

function qrg(){

    for(url of urls){
        qr.toFile(`qrcode_img/${url}.png`,`htts://${url}.com`,{width:150},(err)=>{
            if(err) throw err;
        });
        console.log(`qrcode generated for ${url}`);

    }
}

qrg();

//module.exports=_qrcode;
