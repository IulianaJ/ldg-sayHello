const sayHello = require('../domain/sayHello');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("What is your name?", (name) => {
const greet = sayHello(name);

console.log(greet);
readline.close();
})