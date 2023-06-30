function Banner() {
  axios.post("https://goods.adteam.info/api/products/getBander").then(
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
    },
    function (err) {
      console.log(err);
    }
  );
}

Banner();

function getProductList() {
  axios.post("https://goods.adteam.info/api/products/getProducts").then(
    function (response) {
      var data = response.data.data.list;
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
                <a href="./productDetail.html">
                        <div class="common-img-box">
                            <img src=${url + item.images[0]} alt="">
                        </div>
                        <div class="info-box">
                            <div class="title">${item.title}</div>
                        <div class="star">
                            <div id=${item.star}></div>
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
                <a href="./productDetail.html">
                        <div class="common-img-box">
                            <img src=${url + item.images[0]} alt="">
                        </div>
                        <div class="info-box">
                            <div class="title">${item.title}</div>
                        <div class="star">
                            <div id=${item.star}></div>
                        </div>
                        <div class="price">$${item.price} <span>$${item.costprice}</span></div>
                        </div>
                    </a>
                </div>
                `;
          homeRow2.appendChild(PList);
        });
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
    },
    function (err) {
      console.log(err);
    }
  );
}
getProductList();

// function getProductDetails(id){
//     axios.post(url+"/api/products/getProduct",{id:id})
//     .then(function(response){
//         var data =response.data.data.list;
//         if(data){
//             // const homeRow1 = document.querySelector('.homeRow1')
//             // homeRow1.innerHTML='';
//             // data.map((item)=>{
//             //     const swiperSide = document.createElement("div");
//             //     swiperSide.innerHTML = `
//             //     <div class="col homeCol" id="${item.id}">
//             //     <a href="./productDetail.html">
//             //             <div class="common-img-box">
//             //                 <img src=${url+item.images[0]} alt="">
//             //             </div>
//             //             <div class="info-box">
//             //                 <div class="title">${item.title}</div>
//             //             <div class="star">
//             //                 <div id=${item.star}></div>
//             //             </div>
//             //             <div class="price">${item.price}</div>
//             //             </div>
//             //         </a>
//             //     </div>
//             //     `;
//             //     homeRow1.appendChild(swiperSide);
//             // })
//             const productPrimary = document.querySelector(".product-detail-primary");

//             const html = template("product_detail_template", {
//                 url:url,
//               specialProduct: data,
//             });
//             productPrimary.innerHTML = html;

//         }
//         console.log(response);
//     },function(err){
//         console.log(err);
//     })
// }
// // getProductDetails(1)
