// 1-Select the section with an id of container without using querySelector.
const q1 = document.getElementById("container")

// 2- Select the section with an id of container using querySelector.
const q2 = document.querySelector("#container");

// 3- Select all of the list items with a class of "second".
const q3 = document.querySelectorAll(".second");

// 4- Select a list item with a class of third, but only the list item inside of the ol tag.
const q4 = document.querySelector("ol > li");

// 5- Give the section with an id of container the text "Hello!".
q2.appendChild(document.createTextNode("Hello!"));

// 6- Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");

// 7- Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8- Create a new li element.
let liEle = document.createElement('li');
liEle.className = "four";

// 9- Give the li the text "four".
liEle.textContent = "four";

// 10- Append the li to the ul element.
const q10 = document.querySelector("ul");
q10.appendChild(liEle);

// 11- Loop over all of the lis inside the ol tag and give them a background color of "green".
const q11 = document.querySelectorAll("ol > li");
for(let node of q11){
    node.style.backgroundColor = "green";
}

// 12- Remove the div with a class of footer.
footer.remove();

//q4.style.backgroundColor = "red";

/* Testing

for (let n of q3){
    n.style.backgroundColor = "red";
}
*/