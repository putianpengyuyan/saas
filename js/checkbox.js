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
country.addEventListener("change", function (e) {
    const countryValue = e.target.value;
    console.log(countryValue);
});

// first name
const FirstName = document.querySelector("[name=first-name]");
FirstName.addEventListener("blur", VerifyFirst);
function VerifyFirst(e) {
    const FirstNameValue = e.target.value;
    if (FirstNameValue.trim() === "") {
        FirstName.style.borderColor = "red";
    }
}

// last name
const LastName = document.querySelector("[name=last-name]");
LastName.addEventListener("blur", VerifyLast);
function VerifyLast(e) {
    const LastNameValue = e.target.value;
    if (LastNameValue.trim() === "") {
        LastName.style.borderColor = "red";
    }
}

// address
const address = document.querySelector("[name=address]");
address.addEventListener("blur", function (e) {
    const addressValue = e.target.value;
    if (addressValue.trim() === "") {
        address.style.borderColor = "red";
    }
    console.log(addressValue);
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
const province = document.querySelector("[name=province]");
province.addEventListener("change", function (e) {
    const provinceValue = e.target.value;
    console.log(provinceValue);
});

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
function verifyTelephone(e) { }

// agree
const agree = document.querySelector("[name=agree]");
agree.addEventListener("click", function (e) {
    // console.log(!agree);
    if (!agree) {
        // console.log(agree.checked);
        alert(111);
    }
});
// 点击提交
const button = document.querySelector("button");
button.addEventListener("click", function () {
    if (!agree.checked) {
        alert("yes");
    }
    if (!verifyEmail(e)) alert("1");
    if (!verifyPost(e)) alert("2");
    if (!verifyTelephone(e)) alert("3");
});

//   // 依次判断上面的每个模块是否通过
//   if(!verifyEmail()) e.preventDefault()
//   if(!verifyFirst()) e.preventDefault()
//   if(!verifyLast()) e.preventDefault()
//   if(!verifyPost()) e.preventDefault()
//   if(!verifyTelephone()) e.preventDefault()

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
    document.querySelector('.txt').innerText = `$${item.total}`
    
});
const shoppingCartTotal = JSON.parse(localStorageUtil.getShoppingCartTotal())
console.log(shoppingCartTotal);
document.querySelector('.price-total').innerText = `$${shoppingCartTotal}`
