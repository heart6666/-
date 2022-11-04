var psd = document.querySelector('#psd');
var psd2 = document.querySelector('#psd2');
var submitBtn = document.querySelector('#submitBtn');
var ps = document.querySelectorAll('.message');
var phone = document.querySelector('#phone');
var email = document.querySelector('#email');
var username = document.querySelector('#username');
var yanzheng = document.querySelector('#yanzheng');
phone.onfocus = function () {
    ps[0].style.display = "block";
    ps[0].innerHTML = '请输入正确的十一位手机号';
}
phone.onblur = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (phone.value == '') {
        ps[0].innerHTML = '手机号不能为空';
    } else if (!reg.test(phone.value)) {
        ps[0].innerHTML = '输入的手机号有误';
        ps[0].style.color = 'red';
    } else {
        ps[0].innerHTML = '正确';
        ps[0].style.color = 'green';
    }
}
email.onfocus = function () {
    ps[1].style.display = "block";
    ps[1].innerHTML = '请输入正确的四位校验码';
}
email.onblur = function () {
    var reg = /^\w{4}$/;
    if (email.value == '') {
        ps[1].innerHTML = '校验码不能为空';
    } else if (!reg.test(email.value)) {
        ps[1].innerHTML = '输入的校验码有误';
        ps[1].style.color = 'red';

    } else if (email.value == 'r2b7' || email.value == 'r2B7') {
        ps[1].innerHTML = '正确';
        ps[1].style.color = 'green';

    }
}
yanzheng.onfocus = function () {
    ps[2].style.display = "block";
    ps[2].innerHTML = '请输入正确的四位验证码';
}
yanzheng.onblur = function () {
    var reg = /^\d{4}$/;
    if (yanzheng.value == '') {
        ps[2].innerHTML = '验证码不能为空';
    } else if (!reg.test(yanzheng.value)) {
        ps[2].innerHTML = '输入的验证码有误';
        ps[2].style.color = 'red';

    } else if (yanzheng.value == '2240') {
        ps[2].innerHTML = '正确';
        ps[2].style.color = 'green';

    }
}
var yz_ = document.querySelector('.yz');
var timer = null;
var time = 5;
function yz() {
    clearInterval(timer)
    timer = setInterval(function () {
        time--;
        if (time > 0) {
            yz_.innerHTML = time + '秒';
        } else if (time == 0) {
            alert('2240');
        } else {
            clearInterval(timer)
            yz_.innerHTML = '重新获取验证码';
            time = 60;
        }
    }, 1000)
}
username.onfocus = function () {
    ps[3].style.display = "block";
    ps[3].innerHTML = '长度在 6-12 个字符';
}
username.onblur = function () {
    var reg1 = /^\w{6,12}$/;
    var reg2 = /^[0-9]+$/;
    var reg3 = /^[A-z]+$/;
    if (username.value == '') {
        ps[3].innerHTML = '不能为空';
    } else if (!reg1.test(username.value)) {
        ps[3].innerHTML = '长度不在范围内或者存在非法字符';
        ps[3].style.color = 'red';

    } else if (reg2.test(username.value)) {
        ps[3].innerHTML = '不能全是数字';
        ps[3].style.color = 'red';

    } else if (reg3.test(username.value)) {
        ps[3].innerHTML = '不能全是字母';
        ps[3].style.color = 'red';

    } else {
        ps[3].innerHTML = '正确';
        ps[3].style.color = 'green';

    }
}
psd.onfocus = function () {
    ps[4].style.display = "block";
    ps[4].innerHTML = '长度在 6-12 个字符';
}
psd.onblur = function () {
    var reg1 = /^\w{6,12}$/;
    var reg2 = /^[0-9]+$/;
    var reg3 = /^[A-z]+$/;
    if (psd.value == '') {
        ps[4].innerHTML = '不能为空';
    } else if (!reg1.test(psd.value)) {
        ps[4].innerHTML = '长度不在范围内或者存在非法字符';
        ps[4].style.color = 'red';

    } else if (reg2.test(psd.value)) {
        ps[4].innerHTML = '不能全是数字';
        ps[4].style.color = 'red';

    } else if (reg3.test(psd.value)) {
        ps[4].innerHTML = '不能全是字母';
        ps[4].style.color = 'red';

    } else {
        ps[4].innerHTML = '正确';
        ps[4].style.color = 'green';

    }
}
psd2.onfocus = function () {
    ps[5].style.display = "block";
    ps[5].innerHTML = '请输入相同密码';
}
psd2.onblur = function () {
    if (psd2.value == '') {
        ps[5].innerHTML = '不能为空';
    } else if (psd.value !== psd2.value) {
        ps[5].innerHTML = '第二次输入的密码不正确';
        ps[5].style.color = 'red';

    } else {
        ps[5].innerHTML = '正确';
        ps[5].style.color = 'green';

    }
}
submitBtn.onclick = function () {
    if (ps[0].innerHTML == '正确' && ps[1].innerHTML == '正确' && ps[2].innerHTML == '正确' && ps[3].innerHTML == '正确' && ps[4].innerHTML == '正确' && ps[5].innerHTML == '正确') {
        setCookie('username', username.value, 20);
        setCookie('password', psd.value, 20);
        window.location.href = 'http://127.0.0.1:5500/%E6%9E%81%E6%9E%9C%E9%A1%B9%E7%9B%AE/1-login.html'
    }
}