function Banner() {
  axios.post(url+"/api/products/getBander").then(
    function (response) {
      var data = response.data.data.list;
      if (data.length) {
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        swiperWrapper.innerHTML = "";
        data.map((item) => {
          const swiperSide = document.createElement("div");
          swiperSide.classList.add("swiper-slide");
          swiperSide.innerHTML = `<img src=${url + item} alt="">`;
          swiperWrapper.appendChild(swiperSide);
        });
      }
      console.log(response);
      var swiper = new Swiper(".mySwiper", {
        // 小圆点
        pagination: {
          el: ".swiper-pagination",
        },
        //自动轮播
        autoplay: {
            delay: 1000,//1秒切换一次
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
    },
    });
    },
    function (err) {
      console.log(err);
    }
  );
}

Banner();

function getProductList() {
  axios.post(url+"/api/products/getProducts").then(
    function (response) {
      var data = response.data.data.list;
      console.log('-==-=-=-=-=-=-=-=-=data.data.data');
      console.log(data);
      if (data.length) {
        const homeRow1 = document.querySelector(".homeRow1");
        const homeRow2 = document.querySelector(".homeRow2");
        homeRow1.innerHTML = "";
        homeRow2.innerHTML = "";
        data.map((item) => {
              const swiperSide = document.createElement("div");
              swiperSide.innerHTML = `
                    <div class="col homeCol" id="${item.id}">
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
                                <div class="title">${item.title}</div>
                            <div class="star">
                                <div class="class-test-rate"></div>
                            </div>
                            <div class="price">$${item.price} <span>$${item.costprice}</span></div>
                            </div>
                        </a>
                    </div>
                          `;
                homeRow1.appendChild(swiperSide);
                const PList = document.createElement("div");
                PList.innerHTML = `
                      <div class="col homeCol" id="${item.id}">
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
                                  <div class="title">${item.title}</div>
                              <div class="star">
                                  <div class="class-test-rate"></div>
                              </div>
                              <div class="price">$${item.price} <span>$${item.costprice}</span></div>
                              </div>
                          </a>
                      </div>
                      `;
                homeRow2.appendChild(PList);
          
            var rate = layui.rate;
            // 渲染
            rate.render({
              elem: '.class-test-rate',
              value: 5,
                readonly: true,
            });        
        
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


let homeImage = 'homeImage'
function HomeImage(){
  axios.post(url+"/api/products/getConfingText",{"type":homeImage})
  .then(res=>{
    console.log('---------------------');
    console.log(res.data.data.list);
    console.log('---------------------');
    var data = res.data.data.list
    if(data){
      const chain = document.querySelector('.chain-img')
      chain.src=`${url}${data}`
    }
    
    console.log(res);
  },
  err=>{
    console.log(err);
  }
  )
}

HomeImage()