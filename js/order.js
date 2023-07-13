const freight = document.querySelector(".freight");

const shipTxt = document.querySelector(".ship-txt");
const courier = document.querySelector(".courier");
let EndProduct = [];
// 快递获取

function getCourier() {
  axios.post(`${url}/api/products/getCourier`).then(
    (res) => {
      if (res.status === 200) {
        freight.innerHTML = ""
        const courierList = res.data.data.list;
        console.log(courierList);
        console.log('------------------courierList------------');
        for (let [index, key] of Object.keys(courierList).entries()) {
          let courierData = {
            courier_name: key,
            courier_price: courierList[key],
          };
          let courierItem = `
          <div class="ship ${index === 0 ? "ship-active" : ""} shipping">
            <p class="type"><i class="ship-i ${
              index === 0 ? "i-active" : ""
            }"></i>${
            courierData.courier_name
          }</p><span class="freight-amount">$ ${
            courierData.courier_price
          }</span>
          </div>
          `;
          courier.innerHTML += courierItem;
          
        }

        const type = document.querySelectorAll(".type")[0].innerText;
          const amount = document.querySelectorAll(".freight-amount")[0].innerText;
          innerText = `${type} · ${amount}`;
          console.log(innerText);
          console.log('------------courierItem------------');
          freight.innerHTML = innerText;
          document.querySelector('.ship-txt').innerText = `${amount}`

        const ships = document.querySelectorAll(".shipping");
        const shipIs = document.querySelectorAll(".ship-i");
        const freightAmounts = document.querySelectorAll(".freight-amount");

        for (let i = 0; i < ships.length; i++) {
          const ship = ships[i];
          const shipI = shipIs[i];
          const freightAmount = freightAmounts[i];

          ship.addEventListener("click", function (e) {
            console.log(e.target);
            let innerText, parentDiv;
            if (e.target.classList.value.indexOf("ship-i") >= 0) {
              parentDiv = e.target.parentNode.parentNode;
            } else {
              if (e.target.classList.value.indexOf("shipping") < 0) {
                parentDiv = e.target.parentNode;
              } else {
                parentDiv = e.target;
              }
            }
            console.log("=======================");
            console.log(freightAmount.innerText);
            console.log("=======================");
            console.log(parentDiv);
            const type = parentDiv.querySelector(".type").innerText;
            const amount = parentDiv.querySelector(".freight-amount").innerText;
            innerText = `${type} · ${amount}`;
            console.log(innerText);
            document.querySelector(".ship-active").classList.remove("ship-active");
            document.querySelector(".i-active").classList.remove("i-active");
            this.classList.add("ship-active");
            shipI.classList.add("i-active");
            // console.log(e.target.tagName);
            freight.innerText = innerText;
            shipTxt.innerText = freightAmount.innerText;

            var shipFreight = parseFloat(shipTxt.innerText.replace("$", ""));
            let totalAmount = shipFreight;

            if (locationUrl.indexOf("checkout_flag") > 0) {
              const newProduct =localStorage.getItem("newProduct") && JSON.parse(localStorage.getItem("newProduct"));
              totalAmount += parseFloat(newProduct.total);
              const BuyArr = JSON.parse(localStorage.getItem("newProduct"));
              document.querySelector(".subtotal").innerText = `$${BuyArr.total.toFixed(2)}`;
              
              
            } else {
              console.log(2222222222222222222222);
              totalAmount += parseFloat(localStorage.getItem("shopping_cart-total"));
              console.log(111111111111111111);
              const subtotal = JSON.parse(localStorage.getItem("shopping_cart-total"));
              document.querySelector(".subtotal").innerText = `$${subtotal}`;
            }

            document.querySelector(".price-total").innerText = `$${totalAmount.toFixed(2)}`;
            if(document.querySelector('.mobile-price')){
              document.querySelector('.mobile-price').innerText = `$${totalAmount.toFixed(2)}`;
            }
          });
        }
        const selectedFreight = document.querySelector(".ship-active .freight-amount").innerText.replace("$", "");

        const locationUrl = window.location.href;
        if (locationUrl.indexOf("checkout_flag") > 0) {
          const checkout_method = locationUrl.split("checkout_flag=")[1];
          if (checkout_method === "new_product") {
            console.log(JSON.parse(localStorage.getItem("newProduct")));
            const BuyArr = JSON.parse(localStorage.getItem("newProduct"));
            console.log("======buyarr=======");
            console.log(BuyArr);
            console.log(BuyArr.num);
            console.log("======buyarr=======");
            const productLists = document.querySelectorAll(".product-list");
            for(let i=0;i<productLists.length;i++){
              const productList = productLists[i]
              const productItem = document.createElement("div");
            productItem.innerHTML = `
                      <div class="product-item checkout-product-item">
                          <div class="left">
                              <div class="img-box">
                                  <i>${BuyArr.num}</i>
                                  <img src=${url + BuyArr.img}  alt="">
                              </div>
                              <div class="info">
                                  <div class="title">${BuyArr.title}</div>
                                  <div class="color"></div>
                              </div>
                          </div>
                          <div class="right">
                              <div class="price">$${BuyArr.price}</div>
                          </div>
                      </div>
                      `;
            productList.appendChild(productItem);
            }
            
            document.querySelector(".txt").innerText = `$${BuyArr.total}`;
            var freightAmount = parseFloat(amount.replace("$",''))
            freightAmount += BuyArr.total
            console.log(freightAmount);
            console.log('-----------------');
            document.querySelector(".price-total").innerText = `$${freightAmount.toFixed(2)}`;
            
          }
        } else {
          console.log("购物车~~~~~~~~~~~~");
          // shopping cart
          const localProductArr = JSON.parse(localStorageUtil.getProductArr());
          const productLists = document.querySelectorAll(".product-list");
          for(let i=0;i<productLists.length;i++){
            const productList = productLists[i]
            localProductArr.map((item, index) => {
              const productItem = document.createElement("div");
              productItem.innerHTML = `
              <div class="product-item checkout-product-item">
                  <div class="left">
                      <div class="img-box">
                          <i>${item.num}</i>
                          <img src=${item.img}  alt="">
                      </div>
                      <div class="info">
                          <div class="title">${item.title}</div>
                          <div class="color">${item.color}</div>
                      </div>
                  </div>
                  <div class="right">
                      <div class="price">$${item.price}</div>
                  </div>
              </div>
              `;
              productList.appendChild(productItem);
              
            });
          }
          
          const shoppingCartTotal = parseFloat(
            JSON.parse(localStorageUtil.getShoppingCartTotal())
          )
          console.log(shoppingCartTotal);
          console.log(freight.innerText);
          var freightAmount = parseFloat(amount.replace("$",''))
          freightAmount += shoppingCartTotal
          console.log(freightAmount);
          console.log('-----------------');
          document.querySelector(".txt").innerText = `$${shoppingCartTotal}`;
          document.querySelector(".price-total").innerText = `$${freightAmount.toFixed(2)}`;
          if(document.querySelector('.mobile-price')){
            document.querySelector('.mobile-price').innerText = `$${freightAmount.toFixed(2)}`;
          }
        }
      }
    },
    (err) => {
      console.log(err);
    }
  );
}
console.log("----------getCourier----------");
getCourier();

const payShips = document.querySelectorAll(".pay-ship");
const payIs = document.querySelectorAll(".pay-i");
for (let i = 0; i < payShips.length; i++) {
  const payShip = payShips[i];
  const payI = payIs[i];
  payShip.addEventListener("click", function (e) {
    document.querySelector(".pay-active").classList.remove("pay-active");
    document.querySelector(".pay-i-active").classList.remove("pay-i-active");
    this.classList.add("pay-active");
    payI.classList.add("pay-i-active");
    console.log(this.innerText);
  });
}

// return
const Return = document.querySelector(".return");
Return.addEventListener("click", function () {
  location.href = `checkout.html${window.location.search}`;
});

// 用户信息
const userEmail = document.querySelector(".user-email");
const userInfo = document.querySelector(".user-info");
const userManagement = JSON.parse(localStorage.getItem("user_order"));

userEmail.innerHTML = userManagement.email;
userInfo.innerHTML = `
${userManagement.first_name}
${userManagement.last_name}
${userManagement.address}
${userManagement.city}
${userManagement.country.countryName}
${userManagement.postCode}
${userManagement.telephone}
`;

// order

let goods = [];
const orderBtn = document.querySelector("[name=order]");
const token = $.cookie("Token");
console.log(token);
console.log('token--------------------------');
orderBtn.addEventListener("click", function () {
  console.log("========================");
  console.log(userManagement);
  console.log("========================");
  const freight = document.querySelector(".ship-txt").innerHTML.replace("$", "");
  console.log(freight);
  console.log("========================");
  console.log(
    document.querySelector(".price-total").innerText.replace("$", "")
  );
  const locationUrl = window.location.href;
if (locationUrl.indexOf("checkout_flag") > 0) {
  const checkout_method = locationUrl.split("checkout_flag=")[1];
  if (checkout_method === "new_product") {
    goods = [JSON.parse(localStorage.getItem('newProduct'))];
  }
} else {
  goods = JSON.parse(localStorage.getItem('shopping_cart'))
}
  const firstName = userManagement.first_name;
  const lastName = userManagement.last_name;
  const addressComponent = userManagement.address;
  const countryComponent = userManagement.country.countryName;
  const cityComponent = userManagement.city;
  const postCodeComponent = userManagement.postCode;
  const telephoneComponent = userManagement.telephone;
  const emailComponent = userManagement.email;
  console.log("========================");
  console.log(goods);
  console.log("=-=--=-=-=-=goods=-=-=-=-=-=-");

  if (token) {
    PlaceOrder(
      firstName,
      lastName,
      addressComponent,
      cityComponent,
      countryComponent,
      emailComponent,
      postCodeComponent,
      telephoneComponent,
      goods,
      token,
      freight
    );
  } else {
    location.href = "login.html";
    localStorage.removeItem("user_order");
    localStorage.removeItem("newProduct");
    localStorage.removeItem("shopping_cart-total");
    localStorage.removeItem("EndProduct");
    localStorage.removeItem("shopping_cart");
    localStorage.removeItem("shopping_cart_total_num");
  }
});

const config = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};
// api
function PlaceOrder(
  firstName,
  lastName,
  addressComponent,
  cityComponent,
  countryComponent,
  emailComponent,
  postCodeComponent,
  telephoneComponent,
  goods,
  token,
  freight
) {
  axios
    .post(
      url + "/api/products/addOrder",
      {
        first_name: firstName,
        last_name: lastName,
        address: addressComponent,
        country: countryComponent,
        city: cityComponent,
        code: postCodeComponent,
        email: emailComponent,
        telephone: telephoneComponent,
        goods: JSON.stringify(goods),
        token,
        courier: freight,
      },
      config
    )
    .then(
      function (response) {
        console.log(response);
        var orderNumber = response.data.data.data;
        console.log(response);
        pay(orderNumber, token);
      },
      function (err) {
        console.log(err);
      }
    );
}

console.log("----------------");
function Shipping() {
  axios.post(url + "/api/products/getConfingText").then((res) => {
    console.log(res);
  });
}
Shipping();

function pay(orderNumber) {
  axios
    .post(
      url + "/api/products/pay",
      {
        orderNo: orderNumber,
        token,
      },
      config
    )
    .then(
      (res) => {
        var url = res.data.data.data;
        console.log(res);
        console.log(url);
        location.href = url;
        localStorage.removeItem("shopping_cart-total");
        localStorage.removeItem("newProduct");
        localStorage.removeItem("newProduct");
        localStorage.removeItem("shopping_cart");
        localStorage.removeItem("ProductId");
        localStorage.removeItem("user_order");
        localStorage.removeItem("shopping_cart_total_num");
      },
      (err) => {
        console.log(err);
      }
    );
}
