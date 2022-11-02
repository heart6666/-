var username = document.querySelector('#username');
var psd = document.querySelector('#psd');
function login() {
    getCookie('username');
    getCookie('password');
    if (getCookie('username') == username.value && getCookie('password') == psd.value) {
        alert('登录成功');
        localStorage.setItem('user', username.value);
        localStorage.setItem('pass', psd.value);
        localStorage.setItem('islogin', true);
        window.location.href = 'http://127.0.0.1:5500/%E6%9E%81%E6%9E%9C%E9%A1%B9%E7%9B%AE/1-index.html';
    } else {
        alert('用户名或密码输入错误');
    }
}
