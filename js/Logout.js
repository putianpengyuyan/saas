const LogOut = document.querySelector('.Log-out')
    LogOut.addEventListener('click',function(){
        $.removeCookie('Token', { path: '/' });
    })


