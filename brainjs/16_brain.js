const brain = require('brainjs');
const data = require('./data.json');

//const network= new brain.NeuralNetwork();
const network = new brain.recurrent.LSTM()

const trainData = data.map(item=>({
    input:item.comment,
    output:item.topic
}));
network.train(trainData);
const output = network.run('i fixed code');
console.log(output);


