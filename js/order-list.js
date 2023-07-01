const url = "https://goods.adteam.info";

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
const productNum = document.querySelector(".products-num");
if (localStorageUtil.getShoppingCartTotalNum()) {
    shoppingCartNum = JSON.parse(localStorageUtil.getShoppingCartTotalNum());
}

productNum.innerText = shoppingCartNum;

const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')

const token = $.cookie('Token')
const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
function OrderList() {
    axios.post("https://goods.adteam.info/api/products/getOrders",{token:token},config).then(
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
                    <div class="left-box">
                        
                            <div class="img-box">
                                <img src="./upload/tin1.webp" alt="">
                            </div>
                       
                        <div class="info">
                            <div class="order-number">订单编号：${item.orderOn}</div>
                            <div class="title">Tinted Sunglasses</div>
                            <div class="color">Black</div>
                            <div class="size">L</div>
                        </div>
                    </div>
                    <div class="right-box">
                        <div class="order-price">$${item.accout}</div>
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
        }
    );
}
OrderList();

let icon = "iocn";
function Icon() {
  axios
    .post(`https://goods.adteam.info/api/products/getConfingText`, {"type":icon})
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        document.querySelector('link[type="image/x-icon"]').href= `${url}${text}`
        // logo.src=`${url}+${text}`
        console.log(text);
      }
    });
}
Icon();


let ShangName = 'name'
function Name(){
    axios
    .post(`https://goods.adteam.info/api/products/getConfingText`, {"type":ShangName})
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        const title = document.querySelector('title')
        title.innerText= `${text}`
        console.log(text);
      }
    });

}
Name()