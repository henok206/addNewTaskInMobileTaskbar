let titleInput = document.querySelector(".titleInp");
let iconInput = document.querySelector(".iconInpu");
let mainContainer = document.querySelector(".mainContainer");
let iconElm = document.querySelectorAll(".icon");
let textEl = document.querySelectorAll(".text");

const addButton = document.querySelector(".addBtn");

addButton.addEventListener("click", function () {
    let newTitle = titleInput.value;
    let newIcon = iconInput.value;
    console.log(newTitle, newIcon);

    let nbox = document.createElement("div");
    nbox.classList.add("box");
    let hthree = document.createElement("h3");
    hthree.style.background = "blue";
    hthree.classList.add("icon");
    hthree.innerHTML = newIcon;

    let ptex = document.createElement("p");
    ptex.classList.add("text");
    ptex.style.color = "green";
    ptex.innerHTML = newTitle;

    nbox.appendChild(hthree);
    nbox.appendChild(ptex);
    mainContainer.appendChild(nbox);
    let iconElm = document.querySelectorAll(".icon");

    for (let i = 0; i < iconElm.length; i++) {
        iconElm[i].style.backgroundColor = "blue";
        textEl[i].style.color = "green";
    }
});
