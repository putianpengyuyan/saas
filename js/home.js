


// home的商品列表
const homeList1 = [
    {
        id: "2",
        title: "Tinted Sunglasses",
        price: "$21.43",
        oldPrice: "$34.89",
        img: "./upload/shop3.webp",
        star:"ID-rate-demo-readonly-2",
      },
      {
        id: "3",
        title: "Oversized T-shirt",
        price: "$23.12",
        oldPrice: "$54.00",
        img: "./upload/shop4.webp",
      },
      {
        id: "0",
        title: "Quilted Shoulder Bag",
        price: "$65.00",
        oldPrice: "$87.00",
        img: "./upload/shop1.webp",
        star:"ID-rate-demo-readonly-1",
      },
      {
        id: "1",
        title: "Polarised Sunglasses",
        price: "$199.00",
        oldPrice: "$213.00",
        img: "./upload/shop2.webp",
      },

]
const homeList2 = [
    {
        id: "0",
        title: "Quilted Shoulder Bag",
        price: "$65.00",
        oldPrice: "$87.00",
        img: "./upload/shop1.webp",
        star:"ID-rate-demo-readonly-1",
      },
      {
        id: "1",
        title: "Polarised Sunglasses",
        price: "$199.00",
        oldPrice: "$213.00",
        img: "./upload/shop2.webp",
      },
    {
        id: "2",
        title: "Tinted Sunglasses",
        price: "$21.43",
        oldPrice: "$34.89",
        img: "./upload/shop3.webp",
        star:"ID-rate-demo-readonly-2",
      },
      {
        id: "3",
        title: "Oversized T-shirt",
        price: "$23.12",
        oldPrice: "$54.00",
        img: "./upload/shop4.webp",
      },
]

const homeRow1 = document.querySelector('.homeRow1')
homeList1.map((item,index)=>{
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col homeCol" id=${item.id}>
      <a href="./productDetail.html">
            <div class="common-img-box">
                <img src=${item.img} alt="">
            </div>
            <div class="info-box">
                <div class="title">${item.title}</div>
            <div class="star">
                <div id=${item.star}></div>
            </div>
            <div class="price">${item.price}</div>
            </div>
        </a>
    </div>
      `;
      homeRow1.appendChild(div);
})
const homeRow2 = document.querySelector('.homeRow2')
homeList2.map((item,index)=>{
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="col homeCol" id=${item.id}>
        <a href="./productDetail.html">
                <div class="common-img-box">
                    <img src=${item.img} alt="">
                </div>
                <div class="info-box">
                    <div class="title">${item.title}</div>
                <div class="star">
                    <div id=${item.star}></div>
                </div>
                <div class="price">${item.price}</div>
                </div>
            </a>
        </div>
      `;
      homeRow2.appendChild(div);
})


const col = document.querySelectorAll(".homeCol");
console.log(col)
for (let i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function () {
    console.log(col[i]);
    console.log(col[i].id);
    localStorage.setItem("id", JSON.stringify(col[i].id));
    // if(col[i].id=item.id){
    //     // productBox.appendChild(div)
    // }
  });
}