// Delete the <main id="main"> element
document.querySelector('main#main').remove();

// Create a new <h1> element
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Ellis is the champion!';

// Add the new element to the <body>
let body = document.querySelector('body');
body.appendChild(newHeader);
