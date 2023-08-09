// console.log(window.location.search);
// let search = window.location.search;
// console.log(1111111111);
// console.log(search);
// search = search.slice(1, search.length);
// console.log(search);
// const searchArr = search.split('&');
// console.log(searchArr);

// let orderNo;
// searchArr.map(item => {
//   if (item.indexOf('orderNum') >= 0) {
//     orderNo = item.split('=')[1];
//   }
// });
// console.log(22222222222222);
// console.log(orderNo);

const orderNo = UrlUtil.queryParams("orderNum");
console.log("OrderNo----------");
console.log(orderNo);

// const orderNo = search.substring(10, 21);
// console.log(orderNo);

const config = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};
// console.log(window.location.search);
// let MSG = window.location.search.slice(26);
// console.log(MSG);
// const MSG = UrlUtil.queryParams("msg");
// console.log("msg----------");
// console.log(MSG);

const paySuccess = document.querySelector(".pay-success");
const payError = document.querySelector(".pay-error");
const successNum = document.querySelector(".success-num");
const errNum = document.querySelector(".err-num");
// if (MSG === "success") {
// } else {
  
// }

function PAY() {
  const token = $.cookie("Token");
  axios
    .post(
      url + "/api/products/getOrderState",
      { orderNo: orderNo, token: token },
      config
    )
    .then(
      (res) => {
        console.log("-------------------res------------");
        console.log(res);
        var msg = res.data.msg;
        var time = res.data.time;
        var account = res.data.data.accout;
        console.log(account);
        console.log(time);
        console.log(msg);
        const TIME = new Date(parseInt(time) * 1000).toLocaleString();

        if (msg === "success") {
          const successPrice = document.querySelector(".success-price");
          const successTime = document.querySelector(".success-time");
          successTime.innerHTML = `${TIME}`;
          successPrice.innerHTML = `$${account}`;
          paySuccess.style.display = "block";
          payError.style.display = "none";
          successNum.innerHTML = `order num : ${orderNo}`;
        } else if (msg === "error") {
          const errTime = document.querySelector(".err-time");
          const errPrice = document.querySelector(".err-price");
          errTime.innerHTML = `${TIME}`;
          errPrice.innerHTML = `$${account}`;
          payError.style.display = "block";
  paySuccess.style.display = "none";
  errNum.innerHTML = `order num : ${orderNo}`;
        }
      },
      (err) => {
        console.log(err);
      }
    );
}

PAY();
