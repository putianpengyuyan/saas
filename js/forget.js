const email = document.querySelector('[name=email]')
email.addEventListener('input', ()=> {
    email.style.borderColor = '#999999';
});
email.addEventListener('change',verifyEmail)
function verifyEmail(e){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (!reg.test(email.value)){
        email.style.borderColor = 'red';
        return false
    }
    email.style.borderColor = '#999999';
    console.log(e.target.value);
    return true
}


const login = document.querySelector('[name=login]')
login.addEventListener('click',function(e){
    console.log(email.value);
    if(!verifyEmail(e))  alert('1')
    
    
    
})