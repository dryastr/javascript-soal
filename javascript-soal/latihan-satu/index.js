const { fight, myTiger, myWolf, result } = require('./main');

myTiger.strength = Math.floor(Math.random() * 100);
myWolf.strength = Math.floor(Math.random() * 100);

const resultRoundTwo = fight(myTiger, myWolf);

console.log(`The wolf strength now is ${myWolf.strength}`);
console.log(`The tiger strength now is ${myTiger.strength}`);
console.log(`The second winner howl is ${resultRoundTwo}`);
