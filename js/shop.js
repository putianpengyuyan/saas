
// filter
// const filter = document.querySelector(".filter");

// price
// const app3 = document.querySelector("#app");
// const price = document.querySelector(".price");
// const priceBox = document.querySelector(".price-box");
// price.addEventListener("click", function (e) {
//   e.stopPropagation();
//   priceBox.style.display = "block";
//   supplierBox.style.display = "none";
//   conditionBox.style.display = "none";
//   selectBox.style.display = "none";
// });
// priceBox.addEventListener("click", function (e) {
//   e.stopPropagation();
//   priceBox.style.display = "block";
// });
// app3.addEventListener("click", function (e) {
//   e.stopPropagation();
//   priceBox.style.display = "none";
// });

// supplier
// const supplier = document.querySelector(".supplier");
// const supplierBox = document.querySelector(".supplier-box");
// supplier.addEventListener("click", function (e) {
//   e.stopPropagation();
//   supplierBox.style.display = "block";
//   priceBox.style.display = "none";
//   conditionBox.style.display = "none";
//   selectBox.style.display = "none";
// });
// supplierBox.addEventListener("click", function (e) {
//   e.stopPropagation();
//   supplierBox.style.display = "block";
//   // filter.style.display='block'
// });
// app3.addEventListener("click", function (e) {
//   e.stopPropagation();
//   supplierBox.style.display = "none";
// });

// condition
// const condition = document.querySelector(".condition");
// const conditionBox = document.querySelector(".condition-box");
// condition.addEventListener("click", function (e) {
//   e.stopPropagation();
//   conditionBox.style.display = "block";
//   priceBox.style.display = "none";
//   supplierBox.style.display = "none";
//   selectBox.style.display = "none";
// });
// conditionBox.addEventListener("click", function (e) {
//   e.stopPropagation();
//   conditionBox.style.display = "block";
// });
// app3.addEventListener("click", function (e) {
//   e.stopPropagation();
//   conditionBox.style.display = "none";
// });

// recommend
// const recommend = document.querySelector(".recommend");
// const selectBox = document.querySelector(".select-box");
// recommend.addEventListener("click", function (e) {
//   e.stopPropagation();
//   selectBox.style.display = "block";
//   priceBox.style.display = "none";
//   supplierBox.style.display = "none";
//   conditionBox.style.display = "none";
// });
// selectBox.addEventListener("click", function (e) {
//   e.stopPropagation();
//   selectBox.style.display = "none";
// });
// app3.addEventListener("click", function (e) {
//   e.stopPropagation();
//   selectBox.style.display = "none";
// });

// 切换页面
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const infiniteList1 = document.querySelector(".infinite-list");
const infiniteList2 = document.querySelector(".infinite-list2");

// prev
prev.addEventListener("click", function (e) {
  infiniteList1.style.display = "block";
  infiniteList2.style.display = "none";
});

// next
next.addEventListener("click", function (e) {
  infiniteList2.style.display = "block";
  infiniteList1.style.display = "none";
});

//  clear
// const clear = document.querySelector('.clear')
// clear.addEventListener('click',function(){
//     filter.style.display = 'none'
// })
