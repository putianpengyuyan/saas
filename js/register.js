const emailComponent = document.querySelector("[name=email]");
emailComponent.addEventListener("change", verifyEmail);
function verifyEmail(e) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  if (!reg.test(emailComponent.value)) {
    emailComponent.style.borderColor = "red";
    emailComponent.nextElementSibling.style.display = "block";
    return false;
  }
  emailComponent.style.borderColor = "#999999";
  emailComponent.nextElementSibling.style.display = "none";
  console.log(e.target.value);
  return true;
}
emailComponent.addEventListener("input", () => {
  emailComponent.style.borderColor = "#999999";
});

const passwordComponent = document.querySelector("[name=password]");
passwordComponent.addEventListener("change", verifyPassword);
function verifyPassword(e) {
  reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
  if (!reg.test(passwordComponent.value)) {
    passwordComponent.style.borderColor = "red";
    passwordComponent.nextElementSibling.style.display = "block";
    return false;
  }
  passwordComponent.style.borderColor = "#999999";
  passwordComponent.nextElementSibling.style.display = "none";
  console.log(e.target.value);
  return true;
}
passwordComponent.addEventListener("input", function (e) {
  passwordComponent.style.borderColor = "#999999";
});

const create = document.querySelector("[name=create]");
create.addEventListener("click", function (e) {
  // if(!verifyEmail(e)) alert('1')
  // if(!verifyPassword(e)) alert('1')
  console.log(emailComponent.value);
  console.log(passwordComponent.value);
  const username = emailComponent.value;
  const password = passwordComponent.value;
  Register(username, password);
});

function Register(username, password) {
  console.log(username);
  console.log(password);
  console.log("~~~~~~~~~~~~~");
  axios.post(url + "/api/user/register", { username, password }).then(
    function (response) {
      var msg = response.data.msg;
      console.log(msg);
      console.log(response);
      if (msg === "用户名已经存在") {
        // alert('用户已经存在')
        layer.open({
          type: 1,
          offset: "auto", // 详细可参考 offset 属性
          // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
          content: '<div style="padding: 16px;">' + "User Exists !" + "</div>",
          area: "240px",
          title: "",
          btn: "close",
          btnAlign: "c", // 按钮居中
          shade: 0, // 不显示遮罩
          yes: function () {
            layer.closeAll();
          },
        });
      } else if (msg === "注册成功") {
        // alert('注册成功')
        layer.open({
          type: 1,
          offset: "auto", // 详细可参考 offset 属性
          // id: 'ID-demo-layer-offset-'+ offset, // 防止重复弹出
          content:
            '<div style="padding: 16px;">' +
            "Registered Successfully !" +
            "</div>",
          area: "240px",
          title: "",
          btn: "close",
          btnAlign: "c", // 按钮居中
          shade: 0, // 不显示遮罩
          yes: function () {
            layer.closeAll();
            location.href = "login.html";
          },
        });
      }
    },
    function (err) {
      console.log(err);
    }
  );
}

console.log(window.location.href);
const login = document.querySelectorAll(".login");
for (let i = 0; i < login.length; i++) {
  login[i].addEventListener("click", function () {
    console.log(window.location.search);
    location.href = `login.html${window.location.search}`;
  });
}
