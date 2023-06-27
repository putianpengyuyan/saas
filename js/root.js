// 登录
const username = document.querySelector('.username')
const root = document.querySelector('.root')
const app = document.querySelector('#app')
username.addEventListener('click',function(ev){
    // 阻止冒泡
    ev.stopPropagation()
    root.style.display='block'
    console.log('enter---');
    console.log(ev.target);
})
root.addEventListener('click',function(ev){
    root.style.display='none'
    console.log('leave---');
    console.log(ev.target);
})
app.addEventListener('click', function() {
    root.style.display='none'
})
let shoppingCartNum = 0
const productNum =  document.querySelector(".products-num")
if(localStorageUtil.getShoppingCartTotalNum()){
    shoppingCartNum = JSON.parse(localStorageUtil.getShoppingCartTotalNum())
    console.log('========================');
    console.log(shoppingCartNum);
    console.log('========================');
}   


productNum.innerText = shoppingCartNum
const url='https://goods.adteam.info';

