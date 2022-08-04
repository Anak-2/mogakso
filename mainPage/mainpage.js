let inputBox = document.querySelector(".input-container .inputBox");
let list = document.querySelector(".list");

console.log(inputBox);

//delete one list
function deleteList(e) {
  // console.dir(e.target);
  e.target.parentElement.remove();
}

//add key event listencer
inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addList(e);
    inputBox.value = "";
  }
});

//add list
function addList(e) {
  if (inputBox.value != "") {
    const listWrapper = document.createElement("div");
    listWrapper.classList.add("list-wrapper");
    list.appendChild(listWrapper);
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerText = inputBox.value;
    listWrapper.appendChild(listItem);
    const checkBtn = document.createElement("button");
    checkBtn.addEventListener("click", checkList);
    checkBtn.classList.add("complete-check");
    checkBtn.innerText = "✅";
    listWrapper.appendChild(checkBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteList);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "❌";
    listWrapper.appendChild(deleteBtn);
  }
}

function checkList(e) {
  let t = e.target.parentElement;
  console.dir(t);
  if (t.classList.contains("complete-list")) {
    t.classList.remove("complete-list");
  } else {
    t.classList.add("complete-list");
  }
}

const deleteBtn = document.querySelectorAll(".delete-btn");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteList);
}
const addBtn = document.querySelector(".addButton");
addBtn.addEventListener("click", addList);
const checkBtn = document.querySelectorAll(".complete-check");
for (let i = 0; i < checkBtn.length; i++) {
  checkBtn[i].addEventListener("click", checkList);
}
