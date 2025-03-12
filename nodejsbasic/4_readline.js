

//including readline modules 
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout});

//reading input

/* 
rl.question('what is your name : ',(input)=>{
    if(input.trim().toLowerCase()=='asad'){
        rl.close();
    }
})

rl.on('close',()=>{
    console.log('Your Answer are correct !!!');
})
 */

let q1=Math.floor(Math.random()*10)+1;
let q2=Math.floor(Math.random()*10)+1;
let ans=q1*q2;
console.log(ans);

rl.question(`What is ${q1} x ${q2} : \nAns : `,(inp)=>{
    if(inp.trim()==ans){
        rl.close();
    }else{
        rl.setPrompt('Your Answer is '+inp+' Not Correct:\nAns : ')
        rl.prompt();
        rl.on('line',(inp)=>{
            if(inp.trim()==ans){
                rl.close()
            }else{
                rl.setPrompt('Your Answer is '+inp+' Not Correct:\nAns : ');
                rl.prompt();

            }
        })
    }
})


rl.on('close',()=>{
    console.log('Correct...');
})

