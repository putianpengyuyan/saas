function getProductDetails(id) {
  axios.post(url + "/api/products/getProduct", { id: id }).then(
    function (response) {
      var data = response.data.data.list;
      if (data) {
        // const homeRow1 = document.querySelector('.homeRow1')
        // homeRow1.innerHTML='';
        // data.map((item)=>{
        //     const swiperSide = document.createElement("div");
        //     swiperSide.innerHTML = `
        //     <div class="col homeCol" id="${item.id}">
        //     <a href="./productDetail.html">
        //             <div class="common-img-box">
        //                 <img src=${url+item.images[0]} alt="">
        //             </div>
        //             <div class="info-box">
        //                 <div class="title">${item.title}</div>
        //             <div class="star">
        //                 <div id=${item.star}></div>
        //             </div>
        //             <div class="price">${item.price}</div>
        //             </div>
        //         </a>
        //     </div>
        //     `;
        //     homeRow1.appendChild(swiperSide);
        // })
        const productPrimary = document.querySelector(
          ".product-detail-primary"
        );

        const html = template("product_detail_template", {
          url: url,
          specialProduct: data,
        });
        productPrimary.innerHTML = html;
        bindProductDetailEvent(data, url);
      }
      console.log(response);
    },
    function (err) {
      console.log(err);
    }
  );
}
getProductDetails(1);

const shopProductList = [
  {
    id: "0",
    title: "Quilted Shoulder Bag",
    price: "$65.00",
    oldPrice: "$87.00",
    img: "./upload/shop1.webp",
    star: "ID-rate-demo-readonly-1",
    thumbPictures: [
      "./upload/Q1.webp",
      "./upload/Q2.webp",
      "./upload/Q3.webp",
      "./upload/Q4.webp",
      "./upload/Q5.webp",
      "./upload/Q6.webp",
    ],
    colorArr: ["White", "Light Purple"],
    color: "White",
    size: "",
    tag: "",
  },
  {
    id: "1",
    title: "Polarised Sunglasses",
    price: "$199.00",
    oldPrice: "$213.00",
    img: "./upload/shop2.webp",
    thumbPictures: [
      "./upload/swiper1.webp",
      "./upload/swiper2.webp",
      "./upload/swiper3.webp",
      "./upload/swiper4.webp",
      "./upload/swiper5.webp",
      "./upload/swiper6.webp",
    ],
    colorArr: ["Black", "Blown"],
    color: "Black",
    size: "",
    tag: "",
  },
  {
    id: "2",
    title: "Tinted Sunglasses",
    price: "$21.43",
    oldPrice: "$34.89",
    img: "./upload/shop3.webp",
    star: "ID-rate-demo-readonly-2",
    thumbPictures: [
      "./upload/tin1.webp",
      "./upload/tin2.webp",
      "./upload/tin3.webp",
      "./upload/tin4.webp",
      "./upload/tin5.webp",
      "./upload/tin6.webp",
    ],
    colorArr: ["Black", "Blown"],
    color: "Black",
    size: "",
    tag: "",
  },
  {
    id: "3",
    title: "Oversized T-shirt",
    price: "$23.12",
    oldPrice: "$54.00",
    img: "./upload/shop4.webp",
    thumbPictures: [
      "./upload/T1.webp",
      "./upload/T2.webp",
      "./upload/T3.webp",
      "./upload/T4.webp",
      "./upload/T5.webp",
      "./upload/T6.webp",
    ],
    colorArr: ["Pink", "Light Purple"],
    color: "Pink",
    size: "",
    tag: "",
  },
  {
    id: "4",
    title: "Linen Check Blazer",
    price: "$34.89",
    oldPrice: "$45.89",
    img: "./upload/shop2-1.webp",
    thumbPictures: [
      "./upload/lin1.webp",
      "./upload/lin2.webp",
      "./upload/lin3.webp",
      "./upload/lin4.webp",
      "./upload/lin5.jpg",
      "./upload/lin6.jpg",
    ],
    colorArr: ["Green", "Flannel"],
    color: "Green",
    size: "",
    tag: "",
  },
  {
    id: "5",
    title: "Rounded Sunglasses",
    price: "$165.56",
    oldPrice: "$187.56",
    img: "./upload/shop2-2.webp",
    thumbPictures: ["./upload/R1.webp", "./upload/R2.webp"],
    colorArr: ["Gold", "Black"],
    color: "Gold",
    size: "",
    tag: "",
  },
  {
    id: "6",
    title: "Long-sleeve Maxi Dress",
    price: "$108.00",
    oldPrice: "$180.00",
    img: "./upload/shop2-3.webp",
    star: "ID-rate-demo-readonly-3",
    thumbPictures: [
      "./upload/L1.webp",
      "./upload/L2.webp",
      "./upload/L3.webp",
      "./upload/L4.webp",
      "./upload/L5.webp",
      "./upload/L6.webp",
    ],
    colorArr: ["Beiga", "Green"],
    color: "Beiga",
    size: "",
    tag: "",
  },
  {
    id: "7",
    title: "Light Denim Jacket",
    price: "$58.00",
    oldPrice: "$69.00",
    img: "./upload/shop2-4.webp",
    star: "ID-rate-demo-readonly-4",
    thumbPictures: [
      "./upload/j1.webp",
      "./upload/j2.webp",
      "./upload/j3.webp",
      "./upload/j4.webp",
      "./upload/j5.webp",
      "./upload/j6.webp",
    ],
    colorArr: ["Light Blue", "Dark Blue"],
    color: "Light Blue",
    size: "",
    tag: "",
  },
  {
    id: "8",
    title: "Boxy Denim Jacket",
    price: "$68.00",
    oldPrice: "$98.00",
    img: "./upload/list2-1.webp",
    thumbPictures: [
      "./upload/box1.webp",
      "./upload/box2.jpg",
      "./upload/box3.jpg",
      "./upload/box4.jpg",
      "./upload/box5.jpg",
      "./upload/box4.webp",
    ],
    color: "",
    size: "",
    tag: "",
  },
  {
    id: "9",
    title: "Denim Jacket",
    price: "$36.00",
    oldPrice: "$56.00",
    img: "./upload/list2-2.webp",
    thumbPictures: [
      "./upload/den1.webp",
      "./upload/den2.webp",
      "./upload/den3.webp",
      "./upload/den4.webp",
      "./upload/den5.webp",
      "./upload/den6.webp",
    ],
    colorArr: ["Blue", "Black", "Pink"],
    color: "Blue",
    sizeArr: ["M", "L", "XL", "XXL"],
    size: "M",
    tag: "",
  },
];
// const productPrimary = document.querySelector(".product-detail-primary");

// const specialProductArr = shopProductList.filter((item) => {
//   if (JSON.parse(localStorage.getItem("id")) === null) {
//     return parseInt(item.id) === 2;
//   }
//   return parseInt(item.id) === parseInt(JSON.parse(localStorage.getItem("id")));
// });
// const html = template("product_detail_template", {
//   specialProduct: specialProductArr[0],
// });
// productPrimary.innerHTML = html;

function bindProductDetailEvent(data, url) {
  // swiper图片切换
  const swiperS = document.querySelectorAll(".swiper-list");
  const rightSwiper = document.querySelector(".right-swiper");
  for (let i = 0; i < swiperS.length; i++) {
    swiperS[i].addEventListener("click", function (e) {
      if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
      }

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
      if (document.querySelector(".color-active")) {
        document
          .querySelector(".color-active")
          .classList.remove("color-active");
      }
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
      if (document.querySelector(".size-active")) {
        document.querySelector(".size-active").classList.remove("size-active");
      }

      this.classList.add("size-active");
      console.log(e.target.innerText);
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
    mySub();
    input.innerText = `${num}`;
    console.log(num);
  });
  add.addEventListener("click", function () {
    myAdd();
    input.innerText = `${num}`;
    console.log(num);
  });

  // 立即购买
  const buyNow = document.querySelector(".buynow");
  buyNow.addEventListener("click", function (e) {
    console.log("==========buynow===========");
    console.log(data.id);
    console.log('---------------');
    console.log(num);
    console.log(data);
    console.log(data.price);
    console.log(data.title);
    console.log(data.images[0]);
    console.log("==========buynow===========");
    const productList = document.querySelector(".product-list");
    let Arr = [];
    Arr.push(num,data.price,data.title,data.images[0],data.color,data.id)
    console.log(Arr);
    Arr.map((item)=>{
      const id = Arr[5]
      const num = parseInt(Arr[0]);
      const price = parseFloat(Arr[1]);
      const title = Arr[2];
      const total = num*price;
      const img = Arr[3];
      const nowProduct = {
        id:id,
        num:num,
        price:price,
        title:title,
        img:img,
        total:total,
        color:color,
      }
      
      console.log(nowProduct)
      localStorage.setItem("newProduct",JSON.stringify(nowProduct))
      
      
    })
   
    
  });

  // 出现弹窗，禁止页面滚动
  const shoppingCartCom = document.querySelectorAll(".shopping-cart-mask")[0];
  const addToCartBtn = document.querySelectorAll(".add-to-cart")[0];
  addToCartBtn.addEventListener("click", () => {
    shoppingCartCom.style.display = "block";
    document.body.style.overflow = "hidden";

    const specialProductArr = [data];
    //1.点击加购，将商品信息本地存储
    specialProductArr.map((item, index) => {
      console.log(item);
      const id = item.id;
      const title = item.title;
      const img = url + item.images[0];
      console.log(333333333333);
      console.log(img);
      const price = +item.price.replace("$", "");
      const total = num * price;
      const total1 = +total.toFixed(2);

      const product = {
        id: id,
        title: title,
        price: price,
        img: img,
        num: num,
        color: color && color.innerText ? color.innerText : "",
        size: size && size.innerText ? size.innerText : "",
        total: total1,
      };
      console.log("============== ==== ==== === === ==");
      console.log(product);
      localStorageUtil.addProductToShoppingCartLocal(product);
      console.log(id);
      console.log(typeof total);
    });

    // 2.渲染数据到小购物车
    const localProductArr = JSON.parse(localStorageUtil.getProductArr());
    console.group("bendishuju-----");
    console.log(localProductArr);
    console.groupEnd("bendishuju-----");
    const shoppingCartTable = document.querySelector(".table-body");
    console.log(shoppingCartTable);
    let shoppingCartInnerHtml = "";
    localProductArr.map((item, index) => {
      console.log(item.color);
      shoppingCartInnerHtml += `
      <li class="table-item  li">
        <div class="img-box">
          <img src=${item.img} alt="">
        </div>
        <div class="table-info">
          <div class="title">${item.title}</div>
          <div class="p">${item.color}<span>${item.size}</span></div>
          <div class="price">$${item.price}</div>
          <div class="count">
            <div class="input-box">
                <div class="input-number">
                    <span class="sub1 c-sub" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}">
                    <i class="layui-icon layui-icon-subtraction"></i>
                    </span>
                    <div class="input1 c-input">${item.num}</div>
                    <span class="add1 c-add" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}">
                    <i class="layui-icon layui-icon-addition"></i>
                    </span>
                </div>
            </div>
            <div class="remove-btn remove" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}">
                <i class="layui-icon layui-icon-delete" style="font-size: 24px;"></i>
            </div>
        </div>
    </div>
</li>`;
    });
    shoppingCartTable.innerHTML = shoppingCartInnerHtml;
    const subNodeList = document.querySelectorAll(".c-sub");
    const addNodeList = document.querySelectorAll(".c-add");
    for (let i = 0; i < subNodeList.length; i++) {
      const sub = subNodeList[i];
      const add = addNodeList[i];
      sub.addEventListener("click", function (e) {
        const id = sub.getAttribute("data-id");
        const color = sub.getAttribute("data-color") || "";
        const size = sub.getAttribute("data-size") || "";
        localStorageUtil.removeProductNumFromShoppingCartLocal(
          id,
          color,
          size,
          0
        );
      });
      add.addEventListener("click", function () {
        const id = add.getAttribute("data-id");
        const color = add.getAttribute("data-color") || "";
        const size = add.getAttribute("data-size") || "";
        localStorageUtil.removeProductNumFromShoppingCartLocal(
          id,
          color,
          size,
          1
        );
      });
    }

    // 删除商品
    const removeNodeList = document.querySelectorAll(".remove-btn");
    for (let i = 0; i < removeNodeList.length; i++) {
      const remove = removeNodeList[i];
      remove.addEventListener("click", function (e) {
        const id = remove.getAttribute("data-id");
        const color = remove.getAttribute("data-color") || "";
        const size = remove.getAttribute("data-size") || "";
        localStorageUtil.removeWholeProductFromShoppingCartLocal(
          id,
          color,
          size
        );
      });
    }
  });

  // close
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    shoppingCartCom.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

// you may also like
const likeRow = document.querySelector(".likeRow");
function getProductList() {
  axios.post(url + "/api/products/getProducts").then(
    function (response) {
      var data = response.data.data.list;
      console.log(data);
      if (data.length) {
        likeRow.innerHTML = "";
        data.map((item) => {
          const div = document.createElement("div");
          div.innerHTML = `
                <div class="col" id=${item.id}>
                    <a href="./productDetail.html">
                        <div class="common-img-box">
                            <img src=${url + item.images[0]} alt="">
                        </div>
                        <div class="pro-title">${item.title}</div>
                        <div class="star"><div id=${item.star}></div></div>
                        <div class="price">$${item.price}<span>$${
            item.costprice
          }</span></div>
                    </a>
                </div> 
            `;
          likeRow.appendChild(div);
        });
      }
      console.log(response);
    },
    function (err) {
      console.log(err);
    }
  );
}
getProductList();
