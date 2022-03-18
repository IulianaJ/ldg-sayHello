const greeting = document.getElementById("getValue");
greeting.innerHTML = "What is your name?";
const person = document.getElementById("name");
const greetingElement = document.getElementById('showGreeting');

function showGreeting(){
   const getUser = person.value;
   greetingElement.innerHTML = sayHello(getUser);
 }