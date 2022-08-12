let inputBox = document.querySelector(".input-container .inputBox");
let searchBox = document.querySelector(".searchBox");
let list = document.querySelector(".list");
searchBox.addEventListener("keyup", function (e) {
  let listItem = document.querySelectorAll(".list-container .list-item");
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].innerText.includes(searchBox.value, 0)) {
      listItem[i].parentElement.style.display = "flex";
    } else {
      listItem[i].parentElement.style.display = "none";
    }
  }
});

//delete one list
function deleteList(e) {
  // console.dir(e.target);
  let s = e.target.parentElement;
  let t1 = new TimelineMax({
    //remove를 애니메이션 다 끝난 후 호출하기 위한 방법
    onComplete: function () {
      s.remove();
    },
  });
  t1.to(s, { duration: 0.5, opacity: 0, y: -50, ease: "line" });
}

//add key event listencer
inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addList(e);
  }
});

inputBox.addEventListener("focus", function (e) {
  // give shadow to list-inpu document.querySelector(".input-info")t-container
  inputBox.parentElement.style.boxShadow = "0 2px 6px rgb(0 0 0 / 20%)";
  const inputInfo = document.querySelector(".input-info");
  if (inputInfo.classList.contains("input-info-hidden")) {
    inputInfo.classList.remove("input-info-hidden");
    inputInfo.classList.add("input-info-visible");
  }
});

//when inputBox lost focus (it works but it couldn't handle hiding input-info)
// inputBox.addEventListener("blur", function (e) {
//   inputBox.parentElement.style.boxShadow = "none";
// });

//when click outside the list-input, hide box-shadow and input-info
document.addEventListener("mouseup", function (e) {
  let container = document.querySelector(".list-input");
  const inputInfo = document.querySelector(".input-info");
  if (!container.contains(e.target)) {
    if (inputInfo.classList.contains("input-info-visible")) {
      inputInfo.classList.remove("input-info-visible");
      inputInfo.classList.add("input-info-hidden");
    }
    inputBox.parentElement.style.boxShadow = "none";
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
    inputBox.value = "";
  }
}

function checkList(e) {
  let t = e.target.parentElement;
  let t2 = e.target.previousElementSibling;
  console.dir(t2);
  if (t2.classList.contains("complete-list")) {
    t2.classList.remove("complete-list");
    gsap.to(t, { duration: 1, opacity: 1, ease: "line" });
  } else {
    t2.classList.add("complete-list");
    gsap.to(t, { duration: 1, opacity: 0.5, ease: "line" });
  }
}

//init deleteBtn and checkBtn
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

//open side menu
function openSideMenu() {
  console.log("hi...");
  const sideMenu = document.querySelector(".side-menu");
  if (sideMenu.classList.contains("side-menu-hidden")) {
    sideMenu.classList.remove("side-menu-hidden");
    sideMenu.classList.add("side-menu-visible");
  } else {
    sideMenu.classList.remove("side-menu-visible");
    sideMenu.classList.add("side-menu-hidden");
  }
}
document.querySelector(".menu").addEventListener("click", openSideMenu);

//make trash-btn function
function trashCompleted() {
  let listItem = document.querySelectorAll(".list-container .list-item");
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].classList.contains("complete-list")) {
      listItem[i].parentElement.remove();
    }
  }
}
document.querySelector(".trash-svg").addEventListener("click", announceTrash);
//make announcement when user clicks trash-btn
function announceTrash() {
  trashCompleted();
}

// change trash svg color when mouseover, mouseout
document
  .querySelector(".trash-svg")
  .addEventListener("mouseover", changeTrashColorIn);
function changeTrashColorIn() {
  let trashHover = document.querySelectorAll(".trash-hover");
  for (let i = 0; i < trashHover.length; i++) {
    trashHover[i].style.fill = "#7c9499";
  }
}
document
  .querySelector(".trash-svg")
  .addEventListener("mouseout", changeTrashColorOut);
function changeTrashColorOut() {
  let trashHover = document.querySelectorAll(".trash-hover");
  for (let i = 0; i < trashHover.length; i++) {
    trashHover[i].style.fill = "#CCD0D2";
  }
}
