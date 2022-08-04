let inputBox = document.querySelector(".input-container .inputBox");
let list = document.querySelector(".list");

console.log(inputBox);

function deleteList(e) {
  // console.dir(e.target);
  e.target.parentElement.remove();
}

function addList(e) {
  if (inputBox.value != "") {
    const listWrapper = document.createElement("div");
    listWrapper.classList.add("list-wrapper");
    list.appendChild(listWrapper);
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerText = inputBox.value;
    listWrapper.appendChild(listItem);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteList);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "❌";
    listWrapper.appendChild(deleteBtn);
  }
}

const deleteBtn = document.querySelectorAll(".delete-btn");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteList);
}
const addBtn = document.querySelector(".addButton");
addBtn.addEventListener("click", addList);
