var user_id = document.querySelector(".inputBox").innerText;
function goMainPage() {
  window.location.href = "/mainPage/mainPage.html";
}

gsap.fromTo(
  "#login",
  { opacity: 0, x: 300 },
  { opacity: 1, x: 0, duration: 0.5 }
);
