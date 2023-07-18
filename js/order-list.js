
// 登录
const username = document.querySelector(".username");
const root = document.querySelector(".root");
const user = document.querySelector(".user");
const app = document.querySelector("#app");
username.addEventListener("click", function (ev) {
    // 阻止冒泡
    ev.stopPropagation();
    root.style.display = "block";
});
root.addEventListener("click", function (ev) {
    root.style.display = "none";
});
app.addEventListener("click", function () {
    root.style.display = "none";
});
let shoppingCartNum = 0;
const productNum = document.querySelectorAll(".products-num");
for(let i=0;i<productNum.length;i++){

if (localStorageUtil.getShoppingCartTotalNum()) {
    shoppingCartNum = JSON.parse(localStorageUtil.getShoppingCartTotalNum());
}
productNum[i].innerText = shoppingCartNum;
}




const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')

console.log(token);
const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
function OrderList() {
    axios.post(url+"/api/products/getOrders",{token:token},config).then(
        (res) => {
            var list = res.data.data.list;
            console.log(res);
            if (list) {
                container2.style.display='block'
                container1.style.display='none'
                const ul = document.querySelector(".table-body");
                list.map((item) => {
                    const li = document.createElement("li");
                    
                    li.innerHTML = `
                    <div class="top">
                    <div class="order-number">订单编号：${item.orderOn}</div>
                    </div>
                    
                    <div class="bottom">
                        <div class="left-box">
                                <div class="img-box">
                                    <img src="./upload/sun.webp" alt="">
                                </div>
                            <div class="info">
                                <div class="title">商品名称: Tinted Sunglasses</div>
                                <div class="color">颜色: Black</div>
                                <div class="size">尺码: L</div>
                            </div>
                        </div>
                        <div class="right-box">
                            <div class="order-price">应付款： $${item.accout}</div>
                            <div class="order-status">已支付</div>
                        <div>
                    </div>
                    
                    `;
                    ul.appendChild(li)
                    const status = document.querySelectorAll('.order-status')
                    for(let i=0;i<status.length;i++){
                        console.log(status);
                    if(item.states === 0){
                        status[i].innerText = `未支付`
                        status[i].classList.add('err-status')
                    }else{
                        status[i].innerText = `已支付`
                    }
                    }
                    
                });
                
    
                    
            }else if(!list || list == ''){
                container1.style.display='block'
                container2.style.display='none'

            }
        },
        (err) => {
            console.log(err);
            container1.style.display='block'
            container2.style.display='none'
        }
    );
}
OrderList();

let serveEmail = "serveEmail";
function ServeEmail() {
  axios
    .post(`${url}/api/products/getConfingText`, { type: serveEmail })
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        const emails = document.querySelectorAll("[name=Email]");
        console.log('*************')
        console.log(emails)
        for (let i = 0; i < emails.length; i++) {
          const email = emails[i];
          email.value = text;
          console.log(text);
          const btnS = document.querySelectorAll(".btn");
          for (let i = 0; i < btnS.length; i++) {
            const btn = btnS[i];
            btn.addEventListener("click", function () {
              // 一键复制功能
              console.log(email.value);
              let copyText = email.value;
              navigator.clipboard.writeText(copyText);

              layer.open({
                type: 1,
                offset: "auto", // 详细可参考 offset 属性
                // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
                content:
                  '<div style="padding: 16px;">' + "Copied Success!" + "</div>",
                area: "240px",
                title: "",
                btn: "close",
                btnAlign: "c", // 按钮居中
                shade: 0, // 不显示遮罩
                yes: function () {
                  layer.closeAll();
                },
              });
            });
          }
        }
      }
    });
}

ServeEmail();


