//create a new paragraph and append it
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph added by JavaScript.";
mydiv.body.appendChild(newParagraph);

//add an event listener
mydiv.addEventListener('click',()=> {
    alert('div clicked!');
});