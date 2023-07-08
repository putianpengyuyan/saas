let page = 1;
let per_page = 8;
let productTotal = 0;
let SortId = JSON.parse(localStorage.getItem("SortID"))
console.log(SortId);
// 根据数据生成多个页
function getProductList(page, per_page,SortId ) {
  axios
    .post(
      url + "/api/products/getProducts",
      {
        page,
        per_page,
        SortId
      }
    )
    .then(
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
                elem: 'page-container',
                count: productTotal,
                limit: per_page,
                curr: page,
                prev:'prev',
                next:'next',
                jump: function (obj, first) {
                    console.log('jump------');
                    console.log(obj)
                    if (!first) {
                        getProductList(obj.curr, obj.limit)
                    }
                }
                
                // theme: '#1E9FFF'
            });
        // pageName = Math.ceil(total / per_page)
        // console.log(pageName);
        if(data.length > 0){
            const productContainer = document.querySelector(".shop-product-container");
            console.log(2222222222222)
            console.log(productContainer)
            productContainer.innerHTML = '';
            data.map((item)=>{
              productContainer.innerHTML += `
                  <div class="shop-product-item" id=${item.id}>
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
            })

        }
      },
      function (err) {
        console.log(err);
      }
    );
}
getProductList(page, per_page, SortId);

// 分类
