let token1 = $.cookie("Token");
const myAccount = document.querySelectorAll('.my-account')

for(let i=0;i<myAccount.length;i++){
    if(token1){
        myAccount[i].addEventListener('click',function(){
            
            location.href='order-list.html'
        })
        
    }else{
        myAccount[i].addEventListener('click',function(){
    
            location.href='login.html'
        })
    }
    
}