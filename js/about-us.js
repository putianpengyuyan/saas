
function Shipping(){
  axios.post(`https://goods.adteam.info/api/products/getConfingText`)
  .then(res=>{
    console.log(res);
  })
}
Shipping()