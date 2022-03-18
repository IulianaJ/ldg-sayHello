function sayHello(name, selectorGreeting){
const multipleGreetings = [`Hello ${name}, nice to meet you!`, `Welcome ${name}`];
    if(name === ""){
        return "Hello stranger!";
    } 
    const selected = selectorGreeting();
    return multipleGreetings[selected];
}

module.exports = sayHello;
