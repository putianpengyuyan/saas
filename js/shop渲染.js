let page = 1;
let per_page = 8;
let productTotal = 0;
let category_id
// console.log(category_id);
// 根据数据生成多个页
console.log(window.location.search);
if (window.location.search.indexOf("sort_id") > 0) {
  console.log(1111111111);
  // category_id = JSON.parse(localStorage.getItem("SortID"))
  category_id = window.location.search.split("sort_id=")[1];
  console.log("###########");
  console.log(category_id);
  
}
function getProductList(page, per_page, category_id) {
  LoadingUtil.show()
  const params = {
    page,
    per_page,
    category_id,
  };
  if (!category_id) delete params.category_id;
  axios.post(url + "/api/products/getProducts", params).then(
    function (response) {
      console.log("shop-----------------");
      console.log(response);
      console.log("shop-----------------");
      var data = response.data.data.list;
      console.log(data);
      productTotal = response.data.data.total;

      var laypage = layui.laypage;
      // 自定义主题
      laypage.render({
        elem: "page-container",
        count: productTotal,
        limit: per_page,
        curr: page,
        prev: "prev",
        next: "next",
        jump: function (obj, first) {
          console.log("jump------");
          console.log(obj);
          if (!first) {
            getProductList(obj.curr, obj.limit);
          }
        },

        // theme: '#1E9FFF'
      });
      // pageName = Math.ceil(total / per_page)
      // console.log(pageName);
      if (data.length > 0) {
        const productContainer = document.querySelector(".shop-product-container");
        console.log(2222222222222);
        console.log(productContainer);
        productContainer.innerHTML = "";
        data.map((item) => {
          productContainer.innerHTML += `
                  <div class="shop-product-item" id=${item.id}>
                      <a href="./productDetail.html?product_id=${item.id}">
                          <div class="img-box">
                          <div class="product-discount">
                                <P class="dis-tag">${item.discount_tag}%</P>
                                <p>OFF</p>
                                <div class="triangle"></div>
                                <div class="triangle1"></div>
                              </div>
                              <img src=${url + item.images[0]} alt="">
                          </div>
                          <div class="bottom-text">
                          <div class="title">${item.title}</div>
                          <div class="star"><div class="class-test-rate"></div></div>
                          <div class="price">$${item.price}<span>$${item.costprice}</span></div>
                          </div>
                      </a>
                  </div>
              `;
        });
        var rate = layui.rate;
            // 渲染
            rate.render({
              elem: '.class-test-rate',
              value: 5,
                readonly: true,
            });     
        const shopItems = document.querySelectorAll(".shop-product-item");
        for (let i = 0; i < shopItems.length; i++) {
          const shopItem = shopItems[i];
          shopItem.addEventListener("click", function () {
            console.log(111111111111111);
            console.log(shopItem.id);
            const id = shopItem.id;
            localStorage.setItem("ProductId", JSON.stringify(id));
          });
        }
      }
      LoadingUtil.close()
    },
    function (err) {
      console.log(err);
      LoadingUtil.close()
    }
  );
}
getProductList(page, per_page, category_id);
  
// 分类

console.log(window.location.search);
console.log(window.location.search.split('sort_name=')[1]);
if(window.location.search.split('sort_name=')[1]){
  document.querySelector('.sort-name').innerText = window.location.search.split('sort_name=')[1].replace('%20',' ')
}
