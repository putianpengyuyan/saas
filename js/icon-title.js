const url = "https://www.ccreoostlbam.xyz"
let icon = "iocn";
function Icon() {
  axios
    .post(`${url}/api/products/getConfingText`, {"type":icon})
    .then((res) => {
      var text = res.data.data.list;
      console.log(res);
      if (text) {
        console.log('-------------icon----------------');
        document.querySelector('link[type="image/x-icon"]').href= `${url}${text}`
        // document.querySelector('.logo-img').src=`${url}${text}`
        // document.querySelector('.logo .logo-img').src=`${url}${text}`
        const logos = document.querySelectorAll('.logo-img')
        for(let i=0;i<logos.length;i++){
          const logo = logos[i]
          logo.src = `${url}${text}`
        }
        

        // logo.src=`${url}+${text}`
        console.log(text);
      }
    });
}
Icon();


let ShangName = 'name'
function Name(){
    axios
    .post(`${url}/api/products/getConfingText`, {"type":ShangName})
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


