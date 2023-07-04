const menuBtn = document.querySelector(".menu");
const menuMask = document.querySelector(".menu-mask");
menuBtn.addEventListener("click", function (e) {
  console.log("------------------move---------------");
  menuMask.style.display = "block";
  document.body.style.overflow = "hidden";
});

const lis = document.querySelectorAll(".menu-li");
for (let i = 0; i < lis.length; i++) {
  const li = lis[i];
  li.addEventListener("click", function () {
    menuMask.style.display = "none";
    document.body.style.overflow = "overflow";
  });
}
