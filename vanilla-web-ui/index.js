const button = document.getElementById("button");
const person = document.getElementById("name");
const greetingElement = document.getElementById("showGreeting");
const paragraph = document.createElement("p");

button.addEventListener("click", function (e) {
  e.preventDefault();
  greetingElement.appendChild(paragraph);
  paragraph.innerHTML = sayHello(person.value, () => {
    return Math.floor(Math.random() * 2);
  });
  person.value = "";
});
