// first name
const FirstName = document.querySelector('[name=first-name]')
FirstName.addEventListener('blur',VerifyFirst)
function VerifyFirst(e){
    const FirstNameValue = e.target.value
    if(FirstNameValue.trim()===""){
        LastName.style.borderColor = 'red';
    }
    console.log(FirstNameValue);
}


// last name
const LastName = document.querySelector('[name=last-name]')
LastName.addEventListener('blur',VerifyLast)
function VerifyLast(e){
    const LastNameValue = e.target.value
    if(LastNameValue.trim()===""){
        LastName.style.borderColor = 'red';
    }
    console.log(LastNameValue);
}


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
    axios.post("https://goods.adteam.info/api/user/register", { username, password })
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
  }
  