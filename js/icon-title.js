const url1 = "https://goods.adteam.info";

let icon = "iocn";
function Icon() {
  axios
    .post(`https://goods.adteam.info/api/products/getConfingText`, {"type":icon})
    .then((res) => {
      var text = res.data.data.list;
      if (text) {
        document.querySelector('link[type="image/x-icon"]').href= `${url1}${text}`
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