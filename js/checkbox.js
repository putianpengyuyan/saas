let countryCode, countryName;

//
function getCountryList() {
  axios.get(`${url}/api/products/country`).then((res) => {
    console.log(res);
    if (res.status === 200) {
      const countrySelectorComponent = document.getElementById(
        "checkout-country-selector"
      );
      const countryObj = res.data.data;
      for (const key in countryObj) {
        let optionData = {
          country_code: key,
          country_name: countryObj[key],
        };
        let option = document.createElement("option");
        option.value = JSON.stringify(optionData);
        option.innerText = optionData.country_name;
        countrySelectorComponent.appendChild(option);
      }

      countryCode = Object.keys(countryObj)[0];
      countryName = countryObj[countryCode];
    }
  });
}

getCountryList();

// email
const email = document.querySelector("#email");
email.addEventListener("change", verifyEmail);
function verifyEmail(e) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  if (!reg.test(email.value)) {
    email.style.borderColor = "red";
    return false;
  }
  email.style.borderColor = "#999999";
  // console.log(e.target.value);
  return true;
}

email.addEventListener("input", () => {
  email.style.borderColor = "#999999";
});

// country
const country = document.querySelector("[name=country]");

country.addEventListener("change", function (e) {
  console.log("country--------------");
  console.log(e.target.value);
  let country = JSON.parse(e.target.value);
  countryCode = country.country_code;
  countryName = country.country_name;
});

// first name
const FirstName = document.querySelector("[name=first-name]");
FirstName.addEventListener("blur", VerifyFirst);
function VerifyFirst(e) {
  // console.log(e.target.value);
  const FirstNameValue = FirstName.value;
  if (FirstNameValue.trim() === "") {
    FirstName.style.borderColor = "red";
    return false;
  }
  return true;
}
FirstName.addEventListener("input", () => {
  FirstName.style.borderColor = "#999999";
});
// last name
const LastName = document.querySelector("[name=last-name]");
LastName.addEventListener("blur", VerifyLast);
function VerifyLast(e) {
  const LastNameValue = LastName.value;
  if (LastNameValue.trim() === "") {
    LastName.style.borderColor = "red";
    return false
  }
  return true
}
LastName.addEventListener("input", () => {
  LastName.style.borderColor = "#999999";
});

// address
const address = document.querySelector("[name=address]");
address.addEventListener("blur", VerifyAddress)
function VerifyAddress(e) {
  const addressValue = address.value;
  if (addressValue.trim() === "") {
    address.style.borderColor = "red";
    return false
  }
  return true
}
address.addEventListener("input", () => {
  address.style.borderColor = "#999999";
});
// city
const city = document.querySelector("[name=city]");
city.addEventListener("blur", VerifyCity)
function VerifyCity(e) {
  const cityValue = city.value;
  if (cityValue.trim() === "") {
    city.style.borderColor = "red";
    return false
  }
  return true
}

// province
// const province = document.querySelector("[name=province]");
// province.addEventListener("change", function (e) {
//   const provinceValue = e.target.value;
//   console.log(provinceValue);
// });

// post code
const postCode = document.querySelector("[name=post-code]");
postCode.addEventListener("change", verifyPost);
function verifyPost(e) {
  const reg = /^[a-zA-Z0-9-_]{4,10}$/;

  if (!reg.test(postCode.value)) {
    postCode.style.borderColor = "red";
    return false;
  }
  postCode.style.borderColor = "#999999";
  return true;
}

// telephone
const telephone = document.querySelector("[name=telephone]");
telephone.addEventListener("change", verifyTelephone);
function verifyTelephone(e) {
  const reg = /^[0-9]{10,20}$/;
  if (!reg.test(telephone.value)) {
    console.log(telephone.value);
    telephone.style.borderColor = "red";
    return false;
  }
  telephone.style.borderColor = "#999999";
  return true;
}

// agree
const agree = document.querySelector("[name=agree]");
agree.addEventListener("click", function (e) {
  // console.log(!agree);
  if (!agree) {
    // console.log(agree.checked);
    // alert("请勾选");
    layer.open({
      type: 1,
      offset: "auto", // 详细可参考 offset 属性
      // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
      content: '<div style="padding: 16px;">' + "Please tick agree" + "</div>",
      area: "240px",
      title: "",
      btn: "close",
      btnAlign: "c", // 按钮居中
      shade: 0, // 不显示遮罩
      yes: function () {
        layer.closeAll();
      },
    });
  }
});
// 点击提交
const button = document.querySelector(".continue");
button.addEventListener("click", function (e) {
  if (!agree.checked) {
    // alert("请勾选");
    layer.open({
      type: 1,
      offset: "auto", // 详细可参考 offset 属性
      // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
      content: '<div style="padding: 16px;">' + "Please tick agree" + "</div>",
      area: "240px",
      title: "",
      btn: "close",
      btnAlign: "c", // 按钮居中
      shade: 0, // 不显示遮罩
      yes: function () {
        layer.closeAll();
      },
    });
    return
  }
  if (!verifyEmail(e)) {
    email.style.borderColor = "red";
    return;
  }
  if (!VerifyFirst(e)){
    FirstName.style.borderColor = "red";
    return
  }
  if (!VerifyLast(e)){
    LastName.style.borderColor = "red";
    return
  }
  if (!VerifyAddress(e)){
    address.style.borderColor = "red";
    return
  }
  if (!VerifyCity(e)){
    city.style.borderColor = "red";
    return
  }
  if (!verifyPost(e)){
    postCode.style.borderColor = "red";
    return
  } 
  if (!verifyTelephone(e)){
    telephone.style.borderColor = "red";
    return
  }
  console.log("========================");
  console.log(email.value);
  console.log(country.value);
  console.log(FirstName.value);
  console.log(LastName.value);
  console.log(address.value);
  console.log(city.value);
  // console.log(province.value);
  console.log(postCode.value);
  console.log(telephone.value);
  console.log(country.innerText);
  console.log("========================");
  const emailComponent = email.value;
  const first_name = FirstName.value;
  const last_name = LastName.value;
  const addressComponent = address.value;
  const cityComponent = city.value;

  // const provinceComponent = province.value;
  const postCodeComponent = postCode.value;
  const telephoneComponent = telephone.value;
  // 本地
  const user_order = {
    email: emailComponent,
    first_name: first_name,
    last_name: last_name,
    address: addressComponent,
    city: cityComponent,
    country: {
      countryCode,
      countryName,
    },
    // province:provinceComponent,
    postCode: postCodeComponent,
    telephone: telephoneComponent,
  };
  localStorage.setItem("user_order", JSON.stringify(user_order));
  console.log(window.location);
  location.href = `order.html${window.location.search}`;
});

//   // 依次判断上面的每个模块是否通过
//   if(!verifyEmail()) e.preventDefault()
//   if(!verifyFirst()) e.preventDefault()
//   if(!verifyLast()) e.preventDefault()
//   if(!verifyPost()) e.preventDefault()
//   if(!verifyTelephone()) e.preventDefault()

// 立即购买
// 获取 url 参数判断当前订单来自立即购买或购物车结算

// const LocalShoppingCart = localStorage.getItem("shopping_cart") && JSON.parse(localStorage.getItem("shopping_cart"));
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
    document.querySelector(".txt").innerText = `$${BuyArr.total.toFixed(2)}`;
    document.querySelector(".price-total").innerText = `$${BuyArr.total.toFixed(2)}`;
    if(document.querySelector('.mobile-price')){
      document.querySelector('.mobile-price').innerText = `$${BuyArr.total.toFixed(2)}`;
    }
  }
} else {
  console.log("购物车~~~~~~~~~~~~");
  // shopping cart
  const localProductArr = JSON.parse(localStorageUtil.getProductArr());
  const productLists = document.querySelectorAll(".product-list");
  let total = 0;
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
  ).toFixed(2);
  console.log(shoppingCartTotal);

  document.querySelector(".txt").innerText = `$${shoppingCartTotal}`;
  document.querySelector(".price-total").innerText = `$${shoppingCartTotal}`;
  if(document.querySelector('.mobile-price')){
    document.querySelector('.mobile-price').innerText = `$${shoppingCartTotal}`;
  }
}
// if (!LocalShoppingCart || LocalShoppingCart.length === 0) {

// } else if(localStorage.getItem("shopping_cart")) {

// }

function Render() {
  if (localStorage.getItem("user_order")) {
    const userManagement = JSON.parse(localStorage.getItem("user_order"));
    console.log(userManagement);
    console.log(userManagement.email);
    email.value = userManagement.email;
    country.value = userManagement.country;
    FirstName.value = userManagement.first_name;
    LastName.value = userManagement.last_name;
    postCode.value = userManagement.postCode;
    telephone.value = userManagement.telephone;
    address.value = userManagement.address;
    city.value = userManagement.city;
    country.value = userManagement.country;
  }
}
Render();

console.log(email.innerText);

// return
const Return = document.querySelector(".return");
Return.addEventListener("click", function () {
  location.href = "productDetail.html";
});

