let shipping_policies='shipping_policies';
console.log(shipping_policies);
function ShippingPolicies(){
  axios.post(`https://goods.adteam.info/api/products/getConfingText`,{'type':shipping_policies})
  .then(res=>{
    var text = res.data.data.list
    console.log(text);
    console.log(res);
    if(text){
      const container = document.querySelector('.shipping-policies')
      let Item = `${text}`
      container.innerHTML = Item
      console.log(text);
    }
  })
}
ShippingPolicies()