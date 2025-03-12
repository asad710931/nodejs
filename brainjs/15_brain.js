const brain = require('brainjs'); 

const network = new brain.NeuralNetwork();

/* network.train([
    {input:[1, 1, 1], output:[1]},
    {input:[0, 0, 0], output:[0]},
    {input:[1, 1, 0], output:[0]},
    {input:[0, 1, 0], output:[0]},
    {input:[1, 0, 1], output:[1]}
]); */

network.train([
    {input:[1, 2], output:[1]},//team 2 wins
    {input:[2, 3], output:[0]},//team 2 wins
    {input:[4, 3], output:[0]},//team 4 wins
    {input:[1, 3], output:[0]},//team 4 wins
    {input:[2, 1], output:[1]},//team 4 wins
    {input:[2, 4], output:[1]},//team 4 wins
    {input:[3, 4], output:[1]}//team 4 wins
]);

const output = network.run([1, 3]);
console.log(`Prob : ${output}`);


if(output<=0.70){
    output1=0
}else{
    output1=1
}
console.log(`Ans : ${output1}`);


