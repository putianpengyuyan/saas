
//shop第一页的商品列表
const productList = [
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
    {
      id: "4",
      title: "Linen Check Blazer",
      price: "$34.89",
      oldPrice: "$45.89",
      img: "./upload/shop2-1.webp",

    },
    {
      id: "5",
      title: "Rounded Sunglasses",
      price: "$165.56",
      oldPrice: "$187.56",
      img: "./upload/shop2-2.webp",
    },
    {
      id: "6",
      title: "Long-sleeve Maxi Dress",
      price: "$108.00",
      oldPrice: "$180.00",
      img: "./upload/shop2-3.webp",
      star:"ID-rate-demo-readonly-3",
    },
    {
      id: "7",
      title: "Light Denim Jacket",
      price: "$58.00",
      oldPrice: "$69.00",
      img: "./upload/shop2-4.webp",
      star:"ID-rate-demo-readonly-4",
    },
  ];
//shop第二页的商品列表
const productList2 = [
    {
        id: "8",
        title: "Boxy Denim Jacket",
        price: "$68.00",
        oldPrice: "$98.00",
        img: "./upload/list2-1.webp",
        
      },
      {
        id: "9",
        title: "Denim Jacket",
        price: "$36.00",
        oldPrice: "$56.00",
        img: "./upload/list2-2.webp",
      },
      
]
// 第一页  
function getProductList(){
  axios.post(url+"/api/products/getProducts")
  .then(function(response){
      var data =response.data.data.list;
      console.log(data);
      if(data.length){
          const row = document.querySelector(".row1");
          row.innerHTML='';
          const row2 = document.querySelector(".row2");
          row2.innerHTML='';
          data.map((item)=>{
              const div = document.createElement("div");
              div.innerHTML = `
                <div class="col homeCol" id=${item.id}>
                    <a href="./productDetail.html">
                        <div class="img-box">
                            <img src=${url+item.images[0]} alt="">
                        </div>
                        <div class="bottom-text">
                        <div class="title">${item.title}</div>
                        <div class="star"><div id=${item.star}></div></div>
                        <div class="price">$${item.price}<span>$${item.costprice}</span></div>
                        </div>
                    </a>
                </div> 
            `;
              row.appendChild(div);
              
              const div1 = document.createElement("div");
              div1.innerHTML = `
                <div class="col homeCol" id=${item.id}>
                    <a href="./productDetail.html">
                        <div class="img-box">
                            <img src=${url+item.images[0]} alt="">
                        </div>
                        <div class="bottom-text">
                        <div class="title">${item.title}</div>
                        <div class="star"><div id=${item.star}></div></div>
                        <div class="price">$${item.price}<span>$${item.costprice}</span></div>
                        </div>
                    </a>
                </div> 
                `;
              row2.appendChild(div1);
          })
          const colArr = document.querySelectorAll(".col");
          console.log("!!!!!!!!!!!!!");
          console.log(colArr);
          for (let i = 0; i < colArr.length; i++) {
            const col = colArr[i];
            col.addEventListener("click", function () {
              console.log(colArr[i].id);
              let ProductId = []
              const id = colArr[i].id
              const Id = id
              localStorage.setItem('ProductId',JSON.stringify(Id))
            });
          }

      }
      console.log(response);
  },function(err){
      console.log(err);
  })
}
getProductList()
  // const row = document.querySelector(".row1");
  // productList.map((item, index) => {
  //   const div = document.createElement("div");
  //   div.innerHTML = `
  //         <div class="col homeCol" id=${item.id}>
  //              <a href="./productDetail.html">
  //                 <div class="img-box">
  //                     <img src=${url+item.images[0]} alt="">
  //                 </div>
  //                 <div class="bottom-text">
  //                 <div class="title">${item.title}</div>
  //                 <div class="star"><div id=${item.star}></div></div>
  //                 <div class="price">${item.price}<span>${item.oldPrice}</span></div>
  //                 </div>
  //             </a>
  //         </div> 
  //     `;
  //     row.appendChild(div);
      
  // });
// 第二页
  // const row2 = document.querySelector(".row2");
  // productList2.map((item, index) => {
  //   const div = document.createElement("div");
  //   div.innerHTML = `
  //         <div class="col homeCol" id=${item.id}>
  //         <a href="./productDetail.html">
  //                 <div class="img-box">
  //                     <img src=${item.img} alt="">
  //                 </div>
  //                 <div class="bottom-text">
  //                 <div class="title">${item.title}</div>
  //                 <div class="star"><div id=${item.star}></div></div>
  //                 <div class="price">${item.price}<span>${item.oldPrice}</span></div>
  //                 </div>
  //             </a>
  //         </div> 
  //     `;
  //     row2.appendChild(div);
  // });

  
// const col = document.querySelectorAll(".homeCol");
// console.log(col)
// for (let i = 0; i < col.length; i++) {
//   col[i].addEventListener("click", function () {
//     console.log(col[i]);
//     console.log(col[i].id);
//     localStorage.setItem("id", JSON.stringify(col[i].id));
//     // if(col[i].id=item.id){
//     //     // productBox.appendChild(div)
//     // }
//   });
// }
