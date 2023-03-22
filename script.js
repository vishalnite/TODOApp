let input = document.querySelector("input");
let button = document.querySelector("button");
let ulist = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListItem() {
//creating list item
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("listItem");
//to toggle class "done" when list item is clicked    
    li.addEventListener("click", function() {
        this.classList.toggle("done");
    })

//creating delete button
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("x"));
    button.classList.add("delButton");
//to delete list item
    button.addEventListener("click", function(e) {
        e.target.parentNode.remove();
    })

    li.appendChild(button);
    ulist.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListItem();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.key === "Enter") {
        createListItem();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


