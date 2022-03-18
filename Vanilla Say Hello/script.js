const greeting = document.getElementById("getValue");
greeting.innerHTML = "What is your name?";


function sayHello(name){
    if(name === ""){
        return "Hello stranger!";
    } 
        return `Hello ${name}, nice to meet you`;
}

const person = document.getElementById("name");
const showGreeting = document.getElementById('showGreeting');

function userInput(){
   const getUser = person.value;
   showGreeting.innerHTML = sayHello(getUser);
}