const menuBtn = document.querySelector(".menu");
const menuMask = document.querySelector(".menu-mask");
const menuBody = document.querySelector(".menu-body");
menuBtn.addEventListener("click", function (e) {
  console.log("------------------move---------------");
  menuMask.style.display = "block";
  menuBody.style.display = "block";
  document.body.style.overflow = "hidden";
});

const lis = document.querySelectorAll(".menu-li");
for (let i = 0; i < lis.length; i++) {
  const li = lis[i];
  li.addEventListener("click", function () {
    menuMask.style.display = "none";
    menuBody.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

const pageBtn = document.querySelector(".page-i");
const pageBody = document.querySelector(".page-body");

// shopBtn.addEventListener("click", function () {
//   menuBody.style.display = "none";
//   shopBody.style.display = "block";
// });
// productBtn.addEventListener("click", function () {
//   menuBody.style.display = "none";
//   productBody.style.display = "block";
// });
pageBtn.addEventListener("click", function () {
  menuBody.style.display = "none";
  pageBody.style.display = "block";
});

const pageLis = document.querySelectorAll(".page-li");
for (let i = 0; i < pageLis.length; i++) {
  const page = pageLis[i];
  page.addEventListener("click", function () {
    
    pageBody.style.display = "none";
  });
}
const menuReturns = document.querySelectorAll(".menu-return");
for (let i = 0; i < menuReturns.length; i++) {
  const menuReturn = menuReturns[i];
  menuReturn.addEventListener("click", function () {
    menuBody.style.display = "block";
    shopBody.style.display = "none";
    productBody.style.display = "none";
    pageBody.style.display = "none";
  });
}

let token = $.cookie("Token");

if (token) {
  const use = document.querySelector(".user-li");
  const login = document.querySelector(".login");
  const register = document.querySelector(".register");
  const logout = document.querySelector(".logout");
  use.style.display = "block";
  login.style.display = "none";
  register.style.display = "none";
  logout.style.display = "block";
  logout.addEventListener("click", function () {
    location.href = "login.html";
    $.removeCookie("Token", { path: "/" });
  });
}
