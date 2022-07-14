let iconInput = document.querySelector(".iconInpu");
let titleInput = document.querySelector(".titleInp");
let table = document.querySelector(".table");
let iconElm = document.querySelectorAll(".icon");
let textEl = document.querySelectorAll(".text");
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

    let template = `<tr>
          <td>${newIcon}
           ${newTitle}
          </td>
         </tr>`;
    table.innerHTML += template;
});
/* width: 90px;
    height: 60px;
    color: white;
    border-radius: 50%;
    background-color: gray;

    padding-top: 30px; */
