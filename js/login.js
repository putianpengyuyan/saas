console.log($);
console.log('jquery-----------')
// loginUser()
const Token = 0
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
    .post(url+"/api/user/login", { username, password })
    .then(
      function (response) {
        console.log('登录成功``````````````````')
        console.log(response)
        var msg = response.data.msg;
        console.log(msg);
        // console.log(response);
        if(msg==='登录成功'){
          const userinfo = response.data.data.userinfo;
          var token = userinfo.token
          const expires_in = userinfo.expires_in;
          // localStorage.setItem('Token',JSON.stringify(token))
          let currentTime = new Date().getTime();
          let expiresTime = currentTime + (expires_in * 1000);
          $.cookie('Token', token, { expires: new Date(expiresTime), path: '/' });
          // alert('登录成功')
          layer.open({
            type: 1,
            offset: 'auto', // 详细可参考 offset 属性
            // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
            content: '<div style="padding: 16px;">'+ 'Login Successfully !' +'</div>',
            area: '240px',
            title: '',
            btn: 'close',
            btnAlign: 'c', // 按钮居中
            shade: 0, // 不显示遮罩
            yes: function(){
              layer.closeAll();
              location.href="index.html"
            }
          });
          console.log(token);
          console.log(response);
          
         
        }
        
      },
      function (err) {
        console.log(err);
        layer.open({
          type: 1,
          offset: 'auto', // 详细可参考 offset 属性
          // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
          content: '<div style="padding: 16px;">'+ 'Account password error !' +'</div>',
          area: '240px',
          title: '',
          btn: 'close',
          btnAlign: 'c', // 按钮居中
          shade: 0, // 不显示遮罩
          yes: function(){
            layer.closeAll();
          }
        });
      }
    );
}
