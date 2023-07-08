
const emailComponent = document.querySelector('[name=email]')
emailComponent.addEventListener('change',verifyEmail)
function verifyEmail(e){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (!reg.test(emailComponent.value)){
        emailComponent.style.borderColor = 'red';
        return false
    }
    emailComponent.style.borderColor = '#999999';
    console.log(e.target.value);
    return true
}
emailComponent.addEventListener('input', ()=> {
    emailComponent.style.borderColor = '#999999';
});

const passwordComponent = document.querySelector('[name=password]')
passwordComponent.addEventListener('change',verifyPassword)
function verifyPassword(e){
    reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
    if(!reg.test(passwordComponent.value)){
        passwordComponent.style.borderColor = 'red';
        return false
    }
    passwordComponent.style.borderColor = '#999999';
    console.log(e.target.value);
    return true

}
passwordComponent.addEventListener('input',function(e){
    passwordComponent.style.borderColor = '#999999';
})



const create = document.querySelector('[name=create]')
create.addEventListener('click',function(e){
    // if(!verifyEmail(e)) alert('1')
    // if(!verifyPassword(e)) alert('1')
    console.log(emailComponent.value);
    console.log(passwordComponent.value);
    const username = emailComponent.value;
    const password = passwordComponent.value;
    Register(username, password)
})

function Register(username, password) {
    console.log(username);
    console.log(password);
    console.log("~~~~~~~~~~~~~");
    axios.post(url+"/api/user/register", { username, password })
      .then(
        function (response) {
            var msg = response.data.msg
            console.log(msg);
          console.log(response);
          if(msg==='用户已经存在'){
            alert('用户已经存在')
          }else if(msg==='注册成功'){
            alert('注册成功')
          }
        },
        function (err) {
          console.log(err);
        }
      );
  }
  