let token1 = $.cookie("Token");
const myAccount = document.querySelector('.my-account')

if(token1){
    myAccount.addEventListener('click',function(){
        
        location.href='order-list.html'
    })
    
}else{
    myAccount.addEventListener('click',function(){

        location.href='login.html'
    })
}
