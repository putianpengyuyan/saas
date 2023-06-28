const url = "https://goods.adteam.info";
const freight = document.querySelector(".freight");
console.log(freight.innerText);
const shipTxt = document.querySelector(".ship-txt");

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

    if (localStorage.getItem("shopping_cart-total")) {
      totalAmount += parseFloat(localStorage.getItem("shopping_cart-total"));
    } else {
      totalAmount += parseFloat(localStorage.getItem("newProduct"));
    }
    document.querySelector(".price-total").innerText = `$${totalAmount.toFixed(2)}`;
  });
}

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

// api
function PlaceOrder(
  first_name,
  last_name,
  addressComponent,
  cityComponent,
  countryComponent,
  emailComponent,
  provinceComponent,
  postCodeComponent,
  telephoneComponent
) {
  axios
    .post("https://goods.adteam.info/api/products/addOrder", {
      "address[first_name]": first_name,
      "address[last_name]": last_name,
      "address[address]": addressComponent,
      "address[country]": countryComponent,
      "address[city]": cityComponent,
      "address[code]": postCodeComponent,
      "address[email]": emailComponent,
      "address[telephone]": telephoneComponent,
    })
    .then(
      function (response) {
        console.log(response);
      },
      function (err) {
        console.log(err);
      }
    );
}

const selectedFreight = document
  .querySelector(".ship-active .freight-amount")
  .innerText.replace("$", "");

// 立即购买
const LocalShoppingCart =
  localStorage.getItem("shopping_cart") &&
  JSON.parse(localStorage.getItem("shopping_cart"));
const freightPrice = parseFloat(
  JSON.parse(localStorage.getItem("shipFreight"))
);
if (!LocalShoppingCart || LocalShoppingCart.length === 0) {
  console.log(JSON.parse(localStorage.getItem("newProduct")));
  const BuyArr = JSON.parse(localStorage.getItem("newProduct"));
  console.log("======buyarr=======");
  console.log(BuyArr);
  console.log(BuyArr.num);
  console.log("======buyarr=======");
  const productList = document.querySelector(".product-list");
  const productItem = document.createElement("div");
  productItem.innerHTML = `
          <div class="product-item">
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
  document.querySelector(".txt").innerText = `$${BuyArr.total}`;
  const ToTal = parseFloat(BuyArr.total) + parseFloat(selectedFreight);
  document.querySelector(".price-total").innerText = `$${ToTal}`;
} else if (localStorage.getItem("shopping_cart")) {
  // shopping cart
  const localProductArr = JSON.parse(localStorageUtil.getProductArr());
  const productList = document.querySelector(".product-list");
  localProductArr.map((item, index) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `
    <div class="product-item">
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
    const ToTal = parseFloat(item.total) + parseFloat(selectedFreight);
    document.querySelector(".txt").innerText = `$${item.total.toFixed(2)}`;
    document.querySelector(".price-total").innerText = `$${ToTal.toFixed(2)}`;

  });
  // const shoppingCartTotal = JSON.parse(localStorageUtil.getShoppingCartTotal());
  // console.log(shoppingCartTotal);
  // document.querySelector(".price-total").innerText = `$${shoppingCartTotal}`;
}


// 用户信息
const userEmail = document.querySelector('.user-email')
const  userInfo = document.querySelector('.user-info')
const userManagement = JSON.parse(localStorage.getItem('user_order'))
console.log(userManagement);
userEmail.innerHTML = userManagement.email
userInfo.innerHTML = `
${userManagement.first_name} 
${userManagement.last_name}
${userManagement.address}
${userManagement.city}
${userManagement.country}
${userManagement.postCode}
${userManagement.telephone}
`