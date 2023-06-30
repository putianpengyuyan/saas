const LogOut = document.querySelector('.Log-out')
    LogOut.addEventListener('click',function(){
        $.removeCookie('Token', { path: '/' });
        localStorage.removeItem('shopping_cart-total');
        localStorage.removeItem('newProduct');
        localStorage.removeItem('newProduct');
        localStorage.removeItem('shopping_cart');
        localStorage.removeItem('ProductId');
        localStorage.removeItem('user_order');
        localStorage.removeItem('shopping_cart_total_num');
        
    })


