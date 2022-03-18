function sayHello(name){
    if(name === ""){
        return "Hello stranger!";
    } 
        return `Hello ${name}, nice to meet you!`;
}

module.exports = sayHello;
