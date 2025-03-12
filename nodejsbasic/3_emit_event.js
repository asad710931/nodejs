
//including events modules 
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('test',(num1,num2)=>{
    //console.log(num1+num2);

});
eventEmitter.emit('test',2,4);


class product extends EventEmitter{
    constructor(name,price){
        super();
        this._name=name;
        this._price=price;
    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
}


let computer = new product('DELL-Pc',20000);
let mobile = new product('Walton N9',10000);

computer.on('computer',()=>{
    console.log('Product\n-----------')
    console.log('Name  : '+computer.name+'\nPrice : '+computer.price);
});

mobile.on('mobile',()=>{
    console.log('Name  : '+mobile.name+'\nPrice : '+mobile.price);
});

computer.emit('computer');
mobile.emit('mobile');




