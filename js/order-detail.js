console.log(window.location.search);
const id = window.location.search.split("?id=")[1];

const config = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};
function getOrderDetail() {
  LoadingUtil.show()
  axios.post(url + "/api/products/getOrder", { token, id }, config).then(
    (res) => {
      console.log(res);
      LoadingUtil.close()
      console.log(res.data.data.data);
      var data = res.data.data.data;
      var goodList = data.goodsList;
      var address = [data.address];
      console.log(goodList);
      console.log(address);
      if (data) {
        const orderNum = document.querySelector(".order-num");
        orderNum.innerHTML = `Order Num : ${data.orderOn}`;
        const productList = document.querySelector(".product-list");

        console.log("iiiiiiiiiiiiiiiiiiiiiii");
        console.log(goodList);
        console.log(address);
        if(goodList){
          goodList.forEach((item) => {
            console.log(item);
            console.log(item.goods_option);
            let optionArr = JSON.parse(item.goods_option)
            let productProperty = '';
            optionArr.map(option => {
              productProperty += `<div class="property_value">${option[Object.keys(option)[0]]}</div> `;
            })
           console.log(Object.values(optionArr));
            const div = document.createElement("div");
            div.classList.add("product-info");
            div.innerHTML = `
                              <div class="info">
                                  <div class="img">
                                  <img src='${url}${item.goods_image}'>
                                  </div>
                                  <div class="text">
                                      <div class="pro-title">${item.goods_title}</div>
                                      <div class="pro-property">${productProperty}</div>
                                  </div>
                              </div>
                              <div class="num">X ${item.goods_num}</div>
                              <div class="price">$${item.goods_price}</div>
                  `;
            productList.appendChild(div);
            var payment = document.querySelector(".payment");
            payment.innerHTML = `
                  <h5>Payment</h5>
                                  <ul>
                                      <li>Subtotal <span>$${data.goodprice}</span></li>
                                      <li>Shipping <span>+ $${data.courierfee}</span></li>
                                      <li>Total <span>$${data.accout}</span></li>
                                  </ul>
                  `;
          });
        }

        if(address){
          const shipping = document.querySelector(".shipping");
        address.forEach((item) => {
          console.log(item);
          shipping.innerHTML = `
            
                                <h5>Shipping address</h5>
                                <ul>
                                    <li>${item.email}</li>
                                    <li>${item.telephone}</li>
                                    <li>${item.first_name} ${item.last_name}</li>
                                    <li>${item.country}</li>
                                    <li>${item.address}</li>
                                    <li>${item.city}</li>
                                    <li>${item.code}</li>
                                </ul>
                            
                            
                            `;
        });
        }
      }
    },
    (err) => {
      console.log(err);
      LoadingUtil.close()
    }
  );
}

getOrderDetail(token, id);
