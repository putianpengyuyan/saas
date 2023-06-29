function getProductList() {
  axios.post(url + "/api/products/getProducts").then(function (response) {
    var data = response.data.data.list;
    if (data.length) {
      const row = document.querySelector(".searchrow");
      row.innerHTML = "";
      data.map((item) => {
        const col = document.createElement("div");
        col.innerHTML = `
                <div class="col">
                    <a href="./productDetail.html">
                        <div class="common-img-box">
                            <img src=${url + item.images[0]} alt="">
                        </div>
                    </a>
                    <div class="info-box">
                        <div class="pro-title">${item.title}</div>
                        <div class="star"><div id="ID-rate-demo-readonly-1"></div></div>
                        <div class="price">$${item.price}
                        <span>$${item.costprice}</span></div>
                    </div>
                </div>
                `;
        row.appendChild(col);
      });
    }
  });
}
getProductList();

const search = document.querySelector("[name=search-input]");
search.addEventListener("change", searchValue);
function searchValue() {
  console.log(search.value);
}
const searchBtn = document.querySelector("[name=search-btn]");
searchBtn.addEventListener("click", function () {
  console.log(search.value);
  const keywords = search.value;
  Product(keywords);
});
function Product(keywords) {
  console.log(keywords);
  axios.post(url + "/api/products/getProducts", { keywords }).then(
    function (response) {
      var data = response.data.data.list;
      const notDefined = document.querySelector(".not-found");
      const find = document.querySelector(".find");
      //   console.log(data);
      if (data.length) {
        find.style.display = "block";
        notDefined.style.display = "none";
        console.log(1111111);
        const row = document.querySelector(".searchrow");
        row.innerHTML = "";
        data.map((item) => {
          const col = document.createElement("div");
          col.innerHTML = `
                  <div class="col">
                      <a href="./productDetail.html">
                          <div class="common-img-box">
                              <img src=${url + item.images[0]} alt="">
                          </div>
                      </a>
                      <div class="info-box">
                          <div class="pro-title">${item.title}</div>
                          <div class="star"><div id="ID-rate-demo-readonly-1"></div></div>
                          <div class="price">$${item.price}
                          <span>$${item.costprice}</span></div>
                      </div>
                  </div>
                  `;
          row.appendChild(col);
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
      } else if (!data.length) {
        notDefined.style.display = "block";
        find.style.display = "none";
      }
    },

    function (err) {
      console.log(err);
    }
  );
}
