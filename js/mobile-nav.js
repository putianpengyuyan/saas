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

const shopBtn = document.querySelector(".shop-i");
const productBtn = document.querySelector(".product-i");
const pageBtn = document.querySelector(".page-i");
const topsBtn = document.querySelector(".tops-i");
const outwearBtn = document.querySelector(".outwear-i");
const hoodiesBtn = document.querySelector(".hoodies-i");
const shopBody = document.querySelector(".shop-body");

const productBody = document.querySelector(".product-body");
const pageBody = document.querySelector(".page-body");
const topsBody = document.querySelector(".tops-body");
const outwearBody = document.querySelector(".outwear-body");
const hoodiesBody = document.querySelector(".hoodies-body");
shopBtn.addEventListener("click", function () {
  menuBody.style.display = "none";
  shopBody.style.display = "block";
});
productBtn.addEventListener("click", function () {
  menuBody.style.display = "none";
  productBody.style.display = "block";
});
pageBtn.addEventListener("click", function () {
  menuBody.style.display = "none";
  pageBody.style.display = "block";
});
topsBtn.addEventListener("click", function () {
  shopBody.style.display = "none";
  topsBody.style.display = "block";
});
outwearBtn.addEventListener("click", function () {
  shopBody.style.display = "none";
  outwearBody.style.display = "block";
});
hoodiesBtn.addEventListener("click", function () {
  shopBody.style.display = "none";
  hoodiesBody.style.display = "block";
});
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
const shopReturns = document.querySelectorAll(".shop-return");
for (let i = 0; i < shopReturns.length; i++) {
  const shopReturn = shopReturns[i];
  shopReturn.addEventListener("click", function () {
    shopBody.style.display = "block";
    topsBody.style.display = "none";
    outwearBody.style.display = "none";
    hoodiesBody.style.display = "none";
  });
}

let token = $.cookie("Token");

if (token) {
  const use = document.querySelector(".user-li");
  const login = document.querySelector(".login");
  const register = document.querySelector('.register')
  const logout = document.querySelector('.logout')
  use.style.display = "block";
  login.style.display = 'none'
  register.style.display = 'none'
  logout.style.display = 'block'
  logout.addEventListener('click',function(){
    location.href='login.html'
    $.removeCookie('Token', { path: '/' });
  })
}
