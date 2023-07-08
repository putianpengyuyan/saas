const productNumS = document.querySelectorAll('.products-num');
  for(let i=0;i<productNumS.length;i++){
    const productNum = productNumS[i]
    productNum.innerText = localStorageUtil.getShoppingCartTotalNum();
  }


// swiper图片切换
const swiperS = document.querySelectorAll(".swiper-item");
const rightSwiper = document.querySelector(".right-swiper");
for (let i = 0; i < swiperS.length; i++) {
  swiperS[i].addEventListener("click", function (e) {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    if (e.target.tagName === "IMG") {
      console.log(e.target.src);
      rightSwiper.querySelector("img").src = e.target.src;
    }
  });
}

// tab切换
const tabItemS = document.querySelectorAll(".tab-item");
const tabItemContentS = document.querySelectorAll(".tab-item-content");
for (let i = 0; i < tabItemS.length; i++) {
  // console.log(i);tab-item-content
  tabItemS[i].addEventListener("click", function (e) {
    document.querySelector(".nav-active").classList.remove("nav-active");
    // console.log(111);
    this.classList.add("nav-active");
    // console.log(this);
    console.log(i);
    console.log(tabItemContentS[i]);
    // 排他算法
    for (let i = 0; i < tabItemContentS.length; i++) {
      tabItemContentS[i].style.display = "none";
    }
    tabItemContentS[i].style.display = "block";
  });
}

// 颜色切换
const color = document.querySelector(".color");
const items = document.querySelectorAll(".color-item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    document.querySelector(".color-active").classList.remove("color-active");
    this.classList.add("color-active");
    console.log(e.target.innerText);
    color.innerText = e.target.innerText;
  });
}

// size
const size = document.querySelector(".size");
const sizes = document.querySelectorAll(".size-item");
for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function (e) {
    document.querySelector(".size-active").classList.remove("size-active");
    this.classList.add("size-active");
    size.innerText = e.target.innerText;
  });
}

// 加减
let num = 1;
const sub = document.querySelector(".sub");
const add = document.querySelector(".add");
const input = document.querySelector(" .input");

// 减
function mySub() {
  num--;
  if (num <= 1) {
    num = 1;
  }
  return num;
}
// 加
function myAdd() {
  num++;
  return num;
}

sub.addEventListener("click", function () {
  // console.log(sub);
  mySub();
  input.innerText = `${num}`;
});
add.addEventListener("click", function () {
  // console.log(add);
  myAdd();
  input.innerText = `${num}`;
});

// 出现弹窗，禁止页面滚动
const shoppingCartCom = document.querySelectorAll(".shopping-cart-mask")[0];
const addToCartBtn = document.querySelectorAll(".add-to-cart")[0];
addToCartBtn.addEventListener("click", () => {
  shoppingCartCom.style.display = "block";
  // const app = document.getElementById('app');
  document.body.style.overflow = "hidden";
});

const aBtn = document.querySelector(".t-minor-button");
const title = document.querySelector(".a-title");
const price1 = document.querySelector(".a-price");
const img = document.querySelector(".a-img");
const total = document.querySelector(".total-price");
const ul = document.querySelector(".ul");

const id = document.createElement("id");

function count(num,price){
  return (parseInt(num)*price).toFixed(2)
}

function countTotal(num,key){
  const localProductArrs = JSON.parse(localStorageUtil.getProductArr());
  localProductArrs[key]['num']=num
  localProductArrs[key]['total']=0
  
  if(num==0){
    localProductArrs.splice(key,1)
  }
  var total=0
  var nums=0;
  localProductArrs.map((item,index)=>{
    if(index==key){
      localProductArrs[key]['total']=`$${(num*localProductArrs[key]['price'].replace("$","")).toFixed(2)}`
    }
    total=eval(total+'+'+item.total.replace("$",""))
    console.log(total);
    nums=eval(nums+'+'+item.num)
  })
  localStorageUtil.setItem('shopping_cart',JSON.stringify(localProductArrs));
  localStorageUtil.setItem('shopping_cart_total_num',+nums);
  document.querySelector('.products-num').innerText=+nums;
  document.querySelector('.total-price').innerText = `$${total}`

}


aBtn.addEventListener("click", function (e) {
  var is_goods=true
  const localProductArrs = JSON.parse(localStorageUtil.getProductArr());
  localProductArrs.map((item,index)=>{
      if(item.title==title.innerText&&item.color==color.innerText){
        item.num=eval(item.num+'+'+input.innerText)
        countTotal(item.num,index)
        is_goods=false
      }
      console.log(item.img);
      const li = document.createElement("li");
      // 新增商品
      li.innerHTML = `
        <li class="table-item li">
            <div class="img-box">
                <img src="${item.img}" alt="">
            </div>
            <div class="table-info">
                <div class="title">${item.title}</div>
                    <div class="p">${item.color}</div>
                        <div class="price">${item.price}</div>
                        <div class="count">
                        <div class="input-box">
                            <div class="input-number">
                                <span class="sub1"><i class="layui-icon layui-icon-subtraction"></i>
                                </span>
                                <div class="input1">${item.num}</div>
                                <span class="add1">
                                <i class="layui-icon layui-icon-addition"></i>
                                </span>
                            </div>
                        </div>
                        <div class="remove-btn">
                            <i class="layui-icon layui-icon-delete" style="font-size: 24px;"></i>
                        </div>
                    </div>
                </div>
            </li>
        `;
      console.log(ul.appendChild(li));;


      

  })
  // console.log(num);
  // console.log(color.innerText);
  // console.log(title);
  // console.log(price);
  // console.log(img);
  // const priceNum = parseFloat(price.innerText.replace('$', ''));

  // 新增商品
if(is_goods){
  const priceNum = +price1.innerText.replace("$", "");
  // console.log(priceNum);
  const totalPrice = num * priceNum;
  const totalPrice1 = totalPrice.toFixed(2)
  const li = document.createElement("li");
  li.innerHTML = `
  <li class="table-item li">
      <div class="img-box">
          <img src="${img.src}" alt="">
      </div>
      <div class="table-info">
          <div class="title">${title.innerText}</div>
              <div class="p">${color.innerText}</div>
                  <div class="price">${price1.innerText}</div>
                  <div class="count">
                  <div class="input-box">
                      <div class="input-number">
                          <span class="sub1"><i class="layui-icon layui-icon-subtraction"></i>
                          </span>
                          <div class="input1">${num}</div>
                          <span class="add1">
                          <i class="layui-icon layui-icon-addition"></i>
                          </span>
                      </div>
                  </div>
                  <div class="remove-btn">
                      <i class="layui-icon layui-icon-delete" style="font-size: 24px;"></i>
                  </div>
              </div>
          </div>
      </li>
  `;
ul.appendChild(li);
  const product = {
    // id: 'mockProductId',
    // propertyId: 'mockPropertyId',
    title: title.innerText,
    price: price1.innerText,
    img: img.src,
    color: color.innerText,
    num:input.innerText,
    total: total.innerText,
    // id: id,
  };
  total.innerText = eval(totalPrice1+'+'+total.innerText.replace("$",""))
  localStorageUtil.addProductToShoppingCartLocal(product);
}

  // 弹窗内的 加减
  const subs = document.querySelectorAll(".sub1");
  const adds = document.querySelectorAll(".add1");
  // 删除商品
  const remove = document.querySelectorAll(".remove-btn");
  // console.log(sub1);
  const input1 = document.querySelectorAll(".input1");
  const total1 = document.querySelectorAll(".total.price");
  const productPrice = document.querySelectorAll(".price");
  
  const li = document.querySelectorAll(".li");
  console.log(subs);
  console.log(subs[0]);
  console.log(subs[1]);
  subs.forEach((item,index) => {
    let num = +input1[index].innerText
    console.log(num);
    let productPrice1 = +productPrice[index].innerText.replace("$","")
    subs[index].addEventListener("click", function (e) {
      num--
      if(num===0){
        num=1
      }
      console.log(num);
      input1[index].innerText = `${num}`;
      countTotal(num,index)
      // localStorage.setItem('shoppingCart',JSON.stringify('num:num'))
      return num;
    });
    adds[index].addEventListener("click", function (e) {
      
      console.log(num);
      num++
      console.log(num);
      input1[index].innerText = num
      countTotal(num,index)
      return num;
    });
    remove[index].addEventListener("click", function (e) {
      console.log(e.target);
      console.log(remove);
      console.log(index);
      console.log(remove[index]);
      console.log(ul.children[index]);
      // e.parentNode.parentNode.parentNode.parentNode.parentNode.rem
      ul.removeChild(li[index]);
      // total.innerText = "$0";
      // countTotal(0,index)
      // e.parentNode.parentNode.parentNode.parentNode.parentNode.remove
      // total.innerText = "$0";
      // countTotal(0,index)
      
      // console.log(e.parentNode.parentNode.parentNode.parentNode.parentNode.index() + 1);
    });
  })
  // add1.map((item,index)=>{
    
  // })




});

// close
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  shoppingCartCom.style.display = "none";
  // console.log(num);
  const num1 = num;
  // console.log(num1);
  // proNum.innerText = `${num1}`;
  document.body.style.overflow = "auto";
  // localStorage.setItem("shoppingCartNum", num1);

  // console.log(num);
  // console.log(color.innerText);
  // console.log(title);
  // console.log(price);
  // console.log(img);

  // console.log(shoppingCart);
  console.log(localStorage.getItem(product));
  // proNum.addEventListener("click", function () {
  //   console.log(111);
  //   console.log(proNum.innerText);
  //   console.log(typeof proNum.innerText);
  //   // 转换数据类型
  // });
  // console.log(proNum);
  
  
  ul.innerHTML=''

});

