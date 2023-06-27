const emailComponent = document.querySelector("[name=email]");
emailComponent.addEventListener("change", verifyEmail);
function verifyEmail(e) {
  // const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  // if (!reg.test(email.value)){
  //     email.style.borderColor = 'red';
  //     return false
  // }
  // email.style.borderColor = '#999999';
   console.log(e.target.value);
}

const passwordComponent = document.querySelector("[name=password]");
passwordComponent.addEventListener("change", verifyPassword);
function verifyPassword(e) {
  // reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
  // if(!reg.test(password.value)){
  //     password.style.borderColor = 'red';
  //     return false
  // }
  // password.style.borderColor = '#999999';
   console.log(e.target.value);
  // return true
}

const login = document.querySelector("[name=login]");
login.addEventListener("click", function (e) {
  console.log(emailComponent.value);
  console.log(passwordComponent.value);

  const username = emailComponent.value;
  const password = passwordComponent.value;
  loginUser(username, password);
});

function loginUser(username, password) {
  console.log(username);
  console.log(password);
  console.log("~~~~~~~~~~~~~");
  axios
    .post("https://goods.adteam.info/api/user/login", { username, password })
    .then(
      function (response) {
        var msg = response.data.msg;
        console.log(msg);
        console.log(response);
        if(msg==='账户不正确'){
          alert('账号错误')
        }else if(msg==='密码不正确'){
          alert('密码不正确')
        }
        else if(msg==='登录成功'){
          alert('登录成功')
          location.href="index.html"
        }
        
      },
      function (err) {
        console.log(err);
      }
    );
}
