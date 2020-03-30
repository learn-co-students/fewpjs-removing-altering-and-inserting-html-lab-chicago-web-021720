// Write your code here!

const element = document.querySelector('main#main')
element.remove()

let newElement = document.createElement('h1')
newElement.id = 'victory'
document.body.appendChild(newElement)



let newHeader = document.querySelector('h1#victory')
newHeader.innerHTML = "YOUR-NAME is the champion"
