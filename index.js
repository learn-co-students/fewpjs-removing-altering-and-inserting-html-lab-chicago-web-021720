// Write your code here!
document.querySelector('main#main').remove();
let newElement = document.createElement("H1");
newElement.setAttribute("id","victory");
document.querySelector('body').appendChild(newElement);
let newHeader = document.querySelector("h1#victory");
newHeader.textContent = "Adam Shaffer is the champion";
