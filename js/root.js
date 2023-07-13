

// 登录
const username = document.querySelector(".username");
const root = document.querySelector(".root");
const user = document.querySelector(".user");
const app = document.querySelector("#app");
username.addEventListener("click", function (ev) {
  // 阻止冒泡
  ev.stopPropagation();
  root.style.display = "block";
  console.log("enter---");
  console.log(ev.target);
});
root.addEventListener("click", function (ev) {
  root.style.display = "none";
  console.log("leave---");
  console.log(ev.target);
});
app.addEventListener("click", function () {
  root.style.display = "none";
});
let shoppingCartNum = 0;
const productNumArr = document.querySelectorAll(".products-num");
for (let i = 0; i < productNumArr.length; i++) {
  const productNum = productNumArr[i];
  if (localStorageUtil.getShoppingCartTotalNum()) {
    console.log(productNum);
    console.log("~~~~~~~~~~~~~~~");
    shoppingCartNum = JSON.parse(localStorageUtil.getShoppingCartTotalNum());
    console.log("========================");
    console.log(shoppingCartNum);
    productNum.innerText = shoppingCartNum;
    console.log("========================");
  }

  productNum.innerText = shoppingCartNum;
}

let Token = $.cookie("Token");
console.log(Token);
if (Token) {
  const userRoot = document.querySelector(".user-root");
  const userUser = document.querySelector(".user-user");
  userRoot.style.display = "none";
  userUser.style.display = "block";

  userUser.addEventListener("click", function () {
    location.href = "order-list.html";
  });
} else {
  const userRoot = document.querySelector(".user-root");
  const userUser = document.querySelector(".user-user");
  userRoot.style.display = "block";
  userUser.style.display = "none";
}

let contact = "contact";
function Contact() {
  axios
    .post(url+"/api/products/getConfingText", {
      type: contact,
    })
    .then((res) => {
      var text = res.data.data.list;

      //   console.log(text);
      //   console.log(res);
      if (text) {
        const addressList = document.querySelectorAll(".address");
        for(let i=0;i<addressList.length;i++){
          const address = addressList[i]
          address.innerText = `${text}`;
        }
        
      }
    });
}
Contact();

let serveEmail = 'serveEmail'
function ServeEmail(){
  axios
    .post(`${url}/api/products/getConfingText`, {"type":serveEmail})
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        const emails = document.querySelectorAll('[name=Email]')
        for(let i=0;i<emails.length;i++){
          const email = emails[i]
          email.value = text
        console.log(text);
        const btnS = document.querySelectorAll('.btn')
          for(let i=0;i<btnS.length;i++){
            const btn = btnS[i]
            btn.addEventListener('click',function(){
              // 一键复制功能
              console.log(email.value);
              let copyText = email.value
              navigator.clipboard.writeText(copyText)
              
              layer.open({
                type: 1,
                offset: "auto", // 详细可参考 offset 属性
                // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
                content: '<div style="padding: 16px;">' + "Copied Success!" + "</div>",
                area: "240px",
                title: "",
                btn: "close",
                btnAlign: "c", // 按钮居中
                shade: 0, // 不显示遮罩
                yes: function () {
                  layer.closeAll();
                },
              });
            })
          }
        
        

        }
        
      }
    })

}

ServeEmail()