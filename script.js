let titleInput = document.querySelector(".titleInp");
let iconInput = document.querySelector(".iconInpu");
let mainContainer = document.querySelector(".mainContainer");
let iconElm = document.querySelectorAll(".icon");
let textEl = document.querySelectorAll(".text");
//creating new Html Element
//create div containerElement
let newcontainer = document.createElement("div");
newDiv.classList.add("container");
let newDiv = document.createElement("div");
newDiv.classList.add("box");
// let helm = document.createElement("h3");
// helm.classList("icon");
// helm.innerHTML = "<h3>&#9730</h3>";
// newDiv.appendChild(helm);
// let teEl = document.createElement("p");
// teEl.classList.add("text");
// teEl.innerText = "rain";
// newDiv.appendChild(teEl);
newcontainer.insertAdjacentHTML("afterbegin", newDiv);
mainContainer.insertAdjacentHTML("beforeend", newcontainer);

const addButton = document.querySelector(".addBtn");

addButton.addEventListener("click", function () {
    let newTitle = titleInput.value;
    let newIcon = iconInput.value;
    for (let i = 0; i < iconElm.length; i++) {
        iconElm[i].style.backgroundColor = "blue";
        textEl[i].style.color = "green";
    }

    // newIcon.style.color = "white";
    // newIcon.style.width = "90px";
    // newIcon.style.borderRadius = "50%";
    // newIcon.style.backgroundColor = "gray";
    // newIcon.style.paddingTop = "30px";
    // newIcon.style.display = "inline-block";

    // let template = `<div class="box'>
    //         <div class="box">${newIcon}${newTitle}</div>
    // </div>`;
    // boxContainer.innerHTML += template;
});
/* width: 90px;
    height: 60px;
    color: white;
    border-radius: 50%;
    background-color: gray;

    padding-top: 30px; */
