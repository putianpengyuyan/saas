function getProductDetails(id) {
  LoadingUtil.show();
  axios.post(url + "/api/products/getProduct", { id: id }).then(
    function (response) {
      var data = response.data.data.list;
      var color = data.skudata1 && JSON.parse(data.skudata1);
      var size = data.skudata2 && JSON.parse(data.skudata2);
      var discountTag = data.discount_tag;
      var content = data.content;
      console.log("================content===============");
      console.log(content);
      console.log("================content===============");
      console.log(discountTag);
      console.log("------discountTag---------");
      console.log(data);
      console.log(color);
      console.log(size);
      let colorArr = [];
      let sizeArr = [];

      let option = {};
      if (color) {
        // color.shift()
        console.log(color);
        color.map((item, index) => {
          const name = item.name;

          console.log(name);
          console.log("name------------------");
          colorArr.push(name);
          console.log(colorArr);
          console.log("colorArr------------------");
        });
      }

      console.log(colorArr);
      if (size) {
        size.map((item, index) => {
          const name = item.name;
          sizeArr.push(name);
        });
      }

      console.log(sizeArr);
      console.log("========== res ================");
      console.log(response);
      console.log("========== res ================");
      if (data) {
        console.log(data);
        const productPrimary = document.querySelector(
          ".product-detail-primary"
        );

        const html = template("product_detail_template", {
          url: url,
          specialProduct: data,
          colorArr: colorArr ? colorArr : "",
          sizeArr: sizeArr ? sizeArr : "",
          discountTag: discountTag,
        });
        productPrimary.innerHTML = html;

        console.group('jajajajaj-----------');
        console.log(colorArr)
        console.log(sizeArr);
        console.groupEnd('jajajajaj-----------')
        bindProductDetailEvent(data, url, colorArr, sizeArr, discountTag);
        var swiper = new Swiper(".mySwiper", {
          // 小圆点
          pagination: {
            el: ".swiper-pagination",
          },
          // //自动轮播
          // autoplay: {
          //     delay: 1000,//1秒切换一次
          // },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
        });

        const silhouette = document.querySelector(".silhouette");
        silhouette.innerHTML = "";
        silhouette.innerHTML = content;
      }
      console.log("++++++++++++++++++++++++++++++");
      const keyName = document.querySelectorAll(".keyName");
      for (let i = 0; i < keyName.length; i++) {
        console.log(keyName[i].innerText);
      }
      console.log("++++++++++++++++++++++++++++++");
      console.log(response);
      LoadingUtil.close();
    },
    function (err) {
      console.log(err);
      LoadingUtil.close();
    }
  );
}

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

function bindProductDetailEvent(data, url, colorArr, sizeArr) {
  LoadingUtil.show();
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
    // const productList = document.querySelector(".product-list");
    const id = data.id;
    const formatNum = parseInt(num);
    const price = parseFloat(data.price);
    const title = data.title;
    const total = num * price;
    const img = data.images[0];
    const newProduct = {
      id: id,
      num: formatNum,
      price: price,
      title: title,
      img: img,
      total: total,
      skuData1: {},
      skuData2: {}
    };
    console.log("==========buynow===========");
    console.log(data.id);
    console.log("---------------");
    console.log(formatNum);
    console.log(data);
    console.log(data.price);
    console.log(data.title);
    console.log(data.images[0]);
    console.log(colorArr[0]);
    console.log(sizeArr[0]);
    console.log("==========buynow===========");
    if (colorArr && colorArr.length > 0) {
      newProduct['skuData1'] = {
        name: colorArr[0],
        value: color.innerText
      }
    }
    if (sizeArr && sizeArr.length > 0) {
      newProduct['skuData2'] = {
        name: sizeArr[0],
        value: size.innerText
      }
    }

    console.log(newProduct);
    localStorage.setItem("newProduct", JSON.stringify(newProduct));
  });

  // 出现弹窗，禁止页面滚动
  const shoppingCartCom = document.querySelectorAll(".shopping-cart-mask")[0];
  const addToCartBtn = document.querySelectorAll(".add-to-cart")[0];
  const addToCartBtnMobile = document.querySelectorAll(".add-to-cart")[1];
  addToCartBtn.addEventListener("click", () => {
    console.log("~~~~~~~~~");
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
        skuData1: {},
        skuData2: {},
        // color: color && color.innerText ? color.innerText : "",
        // size: size && size.innerText ? size.innerText : "",
        total: total1,
      };
      if (colorArr && colorArr.length > 0) {
        product['skuData1'] = {
          name: colorArr[0],
          value: color.innerText
        }
      }
      if (sizeArr && sizeArr.length > 0) {
        product['skuData2'] = {
          name: sizeArr[0],
          value: size.innerText
        }
      }
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
          <div class="p">
            ${item.skuData1.value ? `<span>${item.skuData1.value}</span>` : ''}
            ${item.skuData2.value ? `<span>${item.skuData2.value}</span>` : ''} 
          </div>
          <div class="price">$${item.price}</div>
          <div class="count">
            <div class="input-box">
                <div class="input-number">
                    <span class="sub1 c-sub" data-id="${item.id}" data-color="${item.skuData1.value}" data-size="${item.skuData2.value}">
                    <i class="layui-icon layui-icon-subtraction"></i>
                    </span>
                    <div class="input1 c-input">${item.num}</div>
                    <span class="add1 c-add" data-id="${item.id}" data-color="${item.skuData1.value}" data-size="${item.skuData2.value}">
                    <i class="layui-icon layui-icon-addition"></i>
                    </span>
                </div>
            </div>
            <div class="remove-btn remove" data-id="${item.id}" data-color="${item.skuData1.value}" data-size="${item.skuData2.value}">
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
        let color = sub.getAttribute("data-color");
        if (color === 'undefined') color = undefined;
        let size = sub.getAttribute("data-size");
        if (size === 'undefined') size = undefined;
        localStorageUtil.removeProductNumFromShoppingCartLocal(
          id,
          color,
          size,
          0
        );
      });
      add.addEventListener("click", function () {
        const id = add.getAttribute("data-id");
        let color = add.getAttribute("data-color");
        if (color === 'undefined') color = undefined;
        let size = add.getAttribute("data-size");
        if (color === 'undefined') color = undefined;
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
        let color = remove.getAttribute("data-color") || "";
        if (color === 'undefined') color = undefined;
        let size = remove.getAttribute("data-size") || "";
        if (size === 'undefined') size = undefined;
        localStorageUtil.removeWholeProductFromShoppingCartLocal(
          id,
          color,
          size
        );
      });
    }
  });

  addToCartBtnMobile.addEventListener("click", () => {
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

    // 删除商品
    const removeNodeList = document.querySelectorAll(".remove-btn");
    for (let i = 0; i < removeNodeList.length; i++) {
      const remove = removeNodeList[i];
      remove.addEventListener("click", function (e) {
        const id = remove.getAttribute("data-id");
        let color = remove.getAttribute("data-color") || "";
        if (color === 'undefined') color = undefined;
        let size = remove.getAttribute("data-size") || "";
        if (size === 'undefined') size = undefined;
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
  LoadingUtil.show();
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
                    <a href="./productDetail.html?product_id=${item.id}">
                        <div class="common-img-box">
                            <div class="product-discount">
                                <P class="dis-tag">${item.discount_tag}%</P>
                                <p>OFF</p>
                                <div class="triangle"></div>
                                <div class="triangle1"></div>
                              </div>
                            <img src=${url + item.images[0]} alt="">
                        </div>
                        <div class="info-box">
                        <div class="pro-title">${item.title}</div>
                        <div class="star"><div class="class-test-rate"></div></div>
                        <div class="price">$${item.price}<span>$${
            item.costprice
          }</span></div>
                        </div>
                    </a>
                </div> 
            `;
          likeRow.appendChild(div);
          var rate = layui.rate;
          // 渲染
          rate.render({
            elem: ".class-test-rate",
            value: 5,
            readonly: true,
          });
        });

        if (window.location.search.indexOf("product_id=") > 0) {
          id = window.location.search.split("product_id=")[1];
          getProductDetails(id);
        } else {
          const colArr = document.querySelectorAll(".col");
          console.log("!!!!!!!!!!!!!");
          console.log(colArr);
          const id = colArr[0].id;
          getProductDetails(id);
        }
      }
      console.log(response);
      LoadingUtil.close();
    },
    function (err) {
      console.log(err);
      LoadingUtil.close();
    }
  );
}
getProductList();

if (window.location.search.indexOf("sort_id") > 0) {
  console.log(1111111111);
  // category_id = JSON.parse(localStorage.getItem("SortID"))
  category_id = window.location.search.split("sort_id=")[1];
  console.log("###########");
  console.log(category_id);
}
