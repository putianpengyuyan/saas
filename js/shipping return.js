let shippingReturns='shipping_and_returns'

function ShippingReturn(){
  axios.post(`https://goods.adteam.info/api/products/getConfingText`,{"type":shippingReturns})
  .then(res=>{
    var text = res.data.data.list
    console.log(res);
    if(text){
      const container = document.querySelector('.shipping-return')
      let Item = `${text}`
      container.innerHTML = Item
    }
  })
}
ShippingReturn()
