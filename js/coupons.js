// select
// const itemSelect = document.querySelector('.item-select')
// const selectBox = document.querySelector('.select-box')
// const app2 = document.querySelector('#app')
// itemSelect.addEventListener('click',function(e){
//     e.stopPropagation()
//     selectBox.style.display = 'block'
// })
// selectBox.addEventListener('click',function(){
//     selectBox.style.display = 'none'
// })
// app2.addEventListener('click',function(e){
//     e.stopPropagation()
//     selectBox.style.display = 'none'
// })


function getProductList(){
    axios.post(url+"/api/products/getProducts")
    .then(function(response){
        var data = response.data.data.list;
        if(data.length){
            const row = document.querySelector('.rowProduct')
            row.innerHTML= ''
            data.map((item)=>{
                const col = document.createElement('div')
                col.innerHTML=`
                <div class="col">
                    <a href="./productDetail.html">
                        <div class="common-img-box">
                            <img src=${url+item.images[0]} alt="">
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
                row.appendChild(col)
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
    })
}
getProductList()