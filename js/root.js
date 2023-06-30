const url='https://goods.adteam.info';

// 登录
const username = document.querySelector('.username')
const root = document.querySelector('.root')
const user = document.querySelector('.user')
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


let Token = $.cookie('Token')
console.log(Token);
if(Token){
    const userRoot = document.querySelector('.user-root')
    const userUser = document.querySelector('.user-user')
    userRoot.style.display = 'none'
    userUser.style.display = 'block'

    userUser.addEventListener('click',function(){
        location.href='order-list.html'
    })
}
else{
    const userRoot = document.querySelector('.user-root')
    const userUser = document.querySelector('.user-user')
    userRoot.style.display = 'block'
    userUser.style.display = 'none'
}