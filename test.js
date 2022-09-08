
const choices = ["rock", "paper", "scissors"];

let mathRandom = Math.random();
console.log(mathRandom);

let itemAproximation = mathRandom * choices.length;
console.log(itemAproximation);

let itemSelection = Math.floor(itemAproximation);
console.log(itemSelection);

console.log(choices[itemSelection]);



