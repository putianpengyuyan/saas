const contianer1 = document.querySelector(".container1");
const contianer2 = document.querySelector(".container2");
function count(num, price) {
  return (parseInt(num) * price).toFixed(2);
}

const TotalNum = JSON.parse(localStorageUtil.getShoppingCartTotalNum())
console.log(TotalNum);

if (TotalNum === 0) {
  contianer1.style.display = "block";
  contianer2.style.display = "none";
} else {
  contianer1.style.display = "none";
  contianer2.style.display = "block";
  const localProductArr = JSON.parse(localStorageUtil.getProductArr());
  const shoppingCartTable = document.querySelector(".table-body");
  localProductArr.map((item, index) => {
    console.log(item.color);
    const liComponent = document.createElement("li");
    liComponent.innerHTML = `<li>
    <div class="c-product-item">
        <div class="top">
            <a href="#">
                <div class="img-box">
                    <img src=${item.img} alt="">
                </div>
            </a>
        </div>
        <div class="info">
            <a href="#" class="title">${item.title}</a>
            <div class="c-color">${item.color}<span>${item.size}</span></div>
            <div class="remove" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}"><i class="layui-icon layui-icon-delete"
                    style="font-size: 24px;"></i></div>
        </div>
    </div>
    <div class="c-price-item">$${item.price}</div>
    <div class="c-qty-item">
        <div class="c-input-box">
            <div class="c-input-number">
                <span class="c-sub"  data-id="${item.id}" data-color="${item.color}" data-size="${item.size}"><i class="layui-icon layui-icon-subtraction"></i>
                </span>

                <div class="c-input">
                    ${item.num}
                </div>
                <span class="c-add" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}"><i class="layui-icon layui-icon-addition"></i></span>
            </div>
        </div>
    </div>
    <div class="c-total-item">$${item.total}</div>
</li>`;
    shoppingCartTable.appendChild(liComponent);
    // console.log(item,index);
    
  })
 const ShoppingCarTotal = JSON.parse(localStorageUtil.getShoppingCartTotal())
 document.querySelector(".price-title-total").innerHTML=`$${ShoppingCarTotal}`
  const subNodeList = document.querySelectorAll(".c-sub")
  const addNodeList = document.querySelectorAll(".c-add")
  for(let i = 0; i < subNodeList.length; i++){
    const sub = subNodeList[i]
    const add = addNodeList[i]
    sub.addEventListener("click",function(e){
      const id = sub.getAttribute("data-id");
      const color = sub.getAttribute("data-color") || '';
      const size = sub.getAttribute("data-size")  || '';
      localStorageUtil.removeProductNumFromShoppingCartLocal(id, color, size,0)
    })
    add.addEventListener('click',function(){
      const id = add.getAttribute("data-id");
      const color = add.getAttribute("data-color") || '';
      const size = add.getAttribute("data-size")  || '';
      localStorageUtil.removeProductNumFromShoppingCartLocal(id, color, size,1)
    })
}

}



// 删除商品
const removeNodeList = document.querySelectorAll(".remove");
for (let i = 0; i < removeNodeList.length; i++) {
    const remove = removeNodeList[i];
    remove.addEventListener("click", function (e) {
        const id = remove.getAttribute("data-id");
        const color = remove.getAttribute("data-color") || '';
        const size = remove.getAttribute("data-size")  || '';
        localStorageUtil.removeWholeProductFromShoppingCartLocal(id, color, size); 
      });
}




