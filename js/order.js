const url = "https://goods.adteam.info";
const freight = document.querySelector(".freight");
console.log(freight.innerText);
const shipTxt = document.querySelector(".ship-txt");
const courier = document.querySelector(".courier");
let EndProduct = []
// 快递获取

function getCourier() {
  axios.post(`${url}/api/products/getCourier`).then(
    (res) => {
      if (res.status === 200) {
        freight.innerHTML='德玛快递 · $ 10'
        const courierList = res.data.data.list;

        for (let [index, key] of Object.keys(courierList).entries()) {
          let courierData = {
            courier_name: key,
            courier_price: courierList[key],
          };
          let courierItem = `
          <div class="ship ${index === 0 ? 'ship-active' : ''} shipping">
            <p class="type"><i class="ship-i ${index === 0 ? 'i-active' : ''}"></i>${courierData.courier_name}</p><span class="freight-amount">$ ${courierData.courier_price}</span>
          </div>
          `;
          courier.innerHTML += courierItem;
        }
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
              totalAmount += parseFloat(
                localStorage.getItem("shopping_cart-total")
              );
            } else {
              const newProduct =
                localStorage.getItem("newProduct") &&
                JSON.parse(localStorage.getItem("newProduct"));
              totalAmount += parseFloat(newProduct.total);
            }
            document.querySelector(
              ".price-total"
            ).innerText = `$${totalAmount.toFixed(2)}`;
          });
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
      const productList = document.querySelector(".product-list");
      if (!LocalShoppingCart || LocalShoppingCart.length === 0) {
      console.log(JSON.parse(localStorage.getItem("newProduct")));
      const BuyArr = JSON.parse(localStorage.getItem("newProduct"));
      const EndProductItem = {
        id:BuyArr.id,
        num:BuyArr.num,
        title:BuyArr.title,
        img:url + BuyArr.img,
      }
      EndProduct.push(EndProductItem)
      localStorage.setItem('EndProduct',JSON.stringify(EndProduct))
      console.log('------end-------');
      console.log(EndProduct);
      console.log("======buyarr=======");
      console.log(BuyArr);
      console.log(BuyArr.num);
      console.log("======buyarr=======");

      const productItem = document.createElement("div");
      productItem.innerHTML = `
              <div class="product-item">
                  <div class="left">
                      <div class="img-box" id=${BuyArr.id}>
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

      console.group("new Product------");
      console.log(BuyArr.total);
      console.log(selectedFreight);
      console.groupEnd("new Product------");
      productList.appendChild(productItem);
      document.querySelector(".txt").innerText = `$${BuyArr.total}`;
      const ToTal = parseFloat(BuyArr.total) + parseFloat(selectedFreight);
      document.querySelector(".price-total").innerText = `$${ToTal}`;
      } else if (localStorage.getItem("shopping_cart")) {
      // shopping cart
      const localProductArr = JSON.parse(localStorageUtil.getProductArr());
      
      localProductArr.map((item, index) => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `
        <div class="product-item">
            <div class="left">
                <div class="img-box" id=${item.id}>
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
        const EndProductItem = {
          id:item.id,
          num:item.num,
          title:item.title,
          img:item.img
        }
        EndProduct.push(EndProductItem)
        localStorage.setItem('EndProduct',JSON.stringify(EndProduct))
        console.log('------end-------');
        console.log(EndProduct);
        productList.appendChild(productItem);
        const ToTal = parseFloat(item.total) + parseFloat(selectedFreight);
        document.querySelector(".txt").innerText = `$${item.total.toFixed(2)}`;
        document.querySelector(".price-total").innerText = `$${ToTal.toFixed(2)}`;
      });
      // const shoppingCartTotal = JSON.parse(localStorageUtil.getShoppingCartTotal());
      // console.log(shoppingCartTotal);
      // document.querySelector(".price-total").innerText = `$${shoppingCartTotal}`;
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
  location.href = "checkout.html";
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
const orderBtn = document.querySelector("[name=order]");
orderBtn.addEventListener("click", function () {
  
  console.log("========================");
  console.log(userManagement);
  console.log(freight.innerText.replace('$',''));
  console.log(document.querySelector(".price-total").innerText.replace('$',''));
  const EndProduct = JSON.parse(localStorage.getItem('EndProduct'))
  console.log(EndProduct);
  console.log("========================");
  const firstName = userManagement.first_name
  const lastName = userManagement.last_name
  const addressComponent = userManagement.address
  const countryComponent = userManagement.country.countryName
  const cityComponent = userManagement.city
  const postCodeComponent = userManagement.postCode
  const telephoneComponent = userManagement.telephone
  const emailComponent = userManagement.email
  const id = EndProduct.id
  const num = EndProduct.num
  const token = $.cookie('Token')
  if(token){
    PlaceOrder(firstName,lastName,addressComponent, cityComponent,
    countryComponent, emailComponent,postCodeComponent,telephoneComponent,id,num,token)
  }
  else{
    location.href='login.html'
    localStorage.removeItem('user_order')
    localStorage.removeItem('newProduct')
    localStorage.removeItem('shopping_cart-total')
    localStorage.removeItem('EndProduct')
    localStorage.removeItem('shopping_cart')
    localStorage.removeItem('shopping_cart_total_num')
  }
  
});

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
  id,
  num,
  token
) {
  axios
    .post("https://goods.adteam.info/api/products/addOrder", {
      "first_name": firstName,
      "last_name": lastName,
      "address": addressComponent,
      "country": countryComponent,
      "city": cityComponent,
      "code": postCodeComponent,
      "email": emailComponent,
      "telephone": telephoneComponent,
      "goods[][id]":id,
      "goods[][num]":num,
      token
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

console.log('----------------');
function Shipping(){
  axios.post(`https://goods.adteam.info/api/products/getConfingText`)
  .then(res=>{
    console.log(res);
  })
}
Shipping()