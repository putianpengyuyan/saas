const url='https://goods.adteam.info';

//
function getCountryList() {
  axios.get(`${url}/api/products/country`)
  .then(res => {
    console.log(res);
    if (res.status === 200) {
      const countrySelectorComponent = document.getElementById('checkout-country-selector');
      const countryObj = res.data.data;
      for (const key in countryObj) {
        let optionData = {
          country_code: key,
          country_name: countryObj[key]
        };
        let option = document.createElement('option');
        option.value = JSON.stringify(optionData) ;
        option.innerText = optionData.country_name;
        countrySelectorComponent.appendChild(option);
      }
    }
  })
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
  console.log(e.target.value);
  return true;
}

email.addEventListener("input", () => {
  email.style.borderColor = "#999999";
});

// country
const country = document.querySelector("[name=country]");
let countryCode, countryName;
country.addEventListener("change", function (e) {
  console.log('country--------------')
  console.log(e.target.value);
  let country = JSON.parse(e.target.value);
  countryCode = country.country_code;
  countryName = country.country_name;
  
});

// first name
const FirstName = document.querySelector("[name=first-name]");
FirstName.addEventListener("blur", VerifyFirst);
function VerifyFirst(e) {
  const FirstNameValue = e.target.value;
  if (FirstNameValue.trim() === "") {
    FirstName.style.borderColor = "red";
  }
  console.log(FirstNameValue);
}
FirstName.addEventListener("input", () => {
  FirstName.style.borderColor = "#999999";
});
// last name
const LastName = document.querySelector("[name=last-name]");
LastName.addEventListener("blur", VerifyLast);
function VerifyLast(e) {
  const LastNameValue = e.target.value;
  if (LastNameValue.trim() === "") {
    LastName.style.borderColor = "red";
  }
  console.log(LastNameValue);
}
LastName.addEventListener("input", () => {
  LastName.style.borderColor = "#999999";
});

// address
const address = document.querySelector("[name=address]");
address.addEventListener("blur", function (e) {
  const addressValue = e.target.value;
  if (addressValue.trim() === "") {
    address.style.borderColor = "red";
  }
  console.log(e.target.value);
});
address.addEventListener("input", () => {
  address.style.borderColor = "#999999";
});
// city
const city = document.querySelector("[name=city]");
city.addEventListener("blur", function (e) {
  const cityValue = e.target.value;
  if (cityValue.trim() === "") {
    city.style.borderColor = "red";
  }
  console.log(cityValue);
});

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
  const postCodeValue = e.target.value;
  console.log(postCodeValue);
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
  console.log(telephone.value);
  telephone.style.borderColor = "#999999";
  return true;
}

// agree
const agree = document.querySelector("[name=agree]");
agree.addEventListener("click", function (e) {
  // console.log(!agree);
  if (!agree) {
    // console.log(agree.checked);
    alert("请勾选");
  }
});
// 点击提交
const button = document.querySelector(".continue");
button.addEventListener("click", function () {
  if (!agree.checked) {
    alert("请勾选");
    if (!verifyEmail(e))
    if (!verifyPost(e)) 
    if (!verifyTelephone(e)) 
    return;
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
    email:emailComponent,
    first_name:first_name,
    last_name:last_name,
    address:addressComponent,
    city:cityComponent,
    country: {
      countryCode,
      countryName
    },
    // province:provinceComponent,
    postCode:postCodeComponent,
    telephone:telephoneComponent,
  }
  localStorage.setItem('user_order',JSON.stringify(user_order))
  location.href="order.html"
});

//   // 依次判断上面的每个模块是否通过
//   if(!verifyEmail()) e.preventDefault()
//   if(!verifyFirst()) e.preventDefault()
//   if(!verifyLast()) e.preventDefault()
//   if(!verifyPost()) e.preventDefault()
//   if(!verifyTelephone()) e.preventDefault()

// 立即购买
const LocalShoppingCart = localStorage.getItem("shopping_cart") && JSON.parse(localStorage.getItem("shopping_cart"));
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
          <div class="product-item checkout-product-item">
              <div class="left">
                  <div class="img-box">
                      <i>${BuyArr.num}</i>
                      <img src=${url+BuyArr.img}  alt="">
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
  document.querySelector(".price-total").innerText = `$${BuyArr.total}`;
} else if(localStorage.getItem("shopping_cart")) {
  // shopping cart
  const localProductArr = JSON.parse(localStorageUtil.getProductArr());
  const productList = document.querySelector(".product-list");
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
    document.querySelector(".txt").innerText = `$${item.total}`;
  });
  const shoppingCartTotal = JSON.parse(localStorageUtil.getShoppingCartTotal());
  console.log(shoppingCartTotal);
  document.querySelector(".price-total").innerText = `$${shoppingCartTotal}`;
}

function Render(){
  if(localStorage.getItem('user_order')){
    const userManagement = JSON.parse(localStorage.getItem('user_order'))
  console.log(userManagement);
  console.log(userManagement.email);
  email.value = userManagement.email
  country.value = userManagement.country
  FirstName.value = userManagement.first_name
  LastName.value = userManagement.last_name
  postCode.value = userManagement.postCode
  telephone.value = userManagement.telephone
  address.value = userManagement.address
  city.value = userManagement.city
  country.value = userManagement.country
  }
  
}
Render()

console.log(email.innerText);

// return
const Return = document.querySelector('.return')
Return.addEventListener('click',function(){
  location.href='productDetail.html'
})