const url1 = "https://goods.adteam.info";

let icon = "iocn";
function Icon() {
  axios
    .post(`https://goods.adteam.info/api/products/getConfingText`, {"type":icon})
    .then((res) => {
      var text = res.data.data.list;
      console.log(res);
      if (text) {
        document.querySelector('link[type="image/x-icon"]').href= `${url1}${text}`
        document.querySelector('.logo .logo-img').src=''
        

        // logo.src=`${url}+${text}`
        console.log(text);
      }
    });
}
Icon();


let ShangName = 'name'
function Name(){
    axios
    .post(`https://goods.adteam.info/api/products/getConfingText`, {"type":ShangName})
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        const title = document.querySelector('title')
        title.innerText= `${text}`
        console.log(text);
      }
    });

}
Name()


let serveEmail = 'serveEmail'
function ServeEmail(){
  axios
    .post(`https://goods.adteam.info/api/products/getConfingText`, {"type":serveEmail})
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        const email = document.querySelector('[name=Email]')
        email.value = text
        console.log(text);
        const btn = document.querySelector('.btn')
        btn.addEventListener('click',function(){
          // 一键复制功能
          console.log(email.value);
          let copyText = email.value
          navigator.clipboard.writeText(copyText)
          alert('已复制')
        })
        
      }
    })

}

ServeEmail()