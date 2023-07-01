
let about='about'

function About(){
  axios.post(`https://goods.adteam.info/api/products/getConfingText`,{type:about})
  .then(res=>{
    var text = res.data.data.list
    if(text){
      const container = document.querySelector('.about-us')
      let Item = `${text}`
      container.innerHTML = Item
    }
  })
}
About()


