var price_ = document.querySelector('.price');
// console.log(price_);
var btn_ = document.querySelector('.btn').firstElementChild;
var people = price_.firstElementChild;
// console.log(people);
var nums = price_.lastElementChild;
var num = 0;
btn_.onclick = function () {
    num++;
    people.innerHTML = 126 + num + '人申请';
    nums.innerHTML = 20 - num + '台';
    if (num > 20) {
        alert('抢光了！')
        people.innerHTML = 146 + '人申请';
        nums.innerHTML = 0 + '台';
    }
}
// cookie与首页的交互
window.onload = function () {
    var nos = document.querySelectorAll('.no');
    var p_ = document.querySelector('.right');
    var userName = localStorage.getItem('user');
    // console.log(userName);
    var islogin = localStorage.getItem('islogin');
    if (islogin) {
        var str = `<a href="#"></a><span style='color:red'>欢迎${userName}！</span>`;
        // console.log(str);
        for (var i = 0; i < nos.length; i++) {
            nos[i].style.display = 'none';
        }
        p_.innerHTML = str;
    }

}
function showData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/play/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // 接收响应数据  转为 对象
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                show(data);
            } else {
                console.log('请求失败');
            }
        }
    }
}
var index = -1;
var flag = true;
var playmore = document.querySelector('.playmore');
function show(data) {
    // console.log(index);
    // console.log(data[index]);
    // console.log(data.length);
    if (flag) {
        index++;
        console.log(index);
        if (index >= data.length - 1) {
            playmore.background = '';
            playmore.innerHTML = '数据加载完毕！'
            flag = false;
        }
        // 遍历获取数据每一项
        for (var item of data[index]) {
            // console.log(item);
            // 向页面中添加元素
            var ul = document.getElementsByClassName('list')[0];
            var li = document.createElement('li');
            var a = document.createElement('a');
            li.appendChild(a);
            var img = document.createElement('img');
            img.src = item.img;
            img.width = '220';
            img.height = '130';
            a.appendChild(img);
            var bottom = document.createElement('div');
            bottom.className = 'bottom';
            a.appendChild(bottom);
            var p = document.createElement('p');
            bottom.appendChild(p);
            p.innerHTML = item.text;
            var span1 = document.createElement('span');
            span1.innerHTML = item.description;
            p.appendChild(span1);
            var gray = document.createElement('div');
            gray.className = 'gray';
            bottom.appendChild(gray);
            var span2 = document.createElement('span');
            span2.className = 'price0';
            span2.innerHTML = item.price;
            gray.appendChild(span2);
            var right = document.createElement('div');
            right.className = 'right';
            gray.appendChild(right);
            var span3 = document.createElement('span');
            span3.innerHTML = item.like;
            // span3.className = 'zan';
            right.appendChild(span3);
            var span4 = document.createElement('span');
            span4.innerHTML = item.like;
            span4.className = 'zan';
            right.appendChild(span4);
            ul.appendChild(li);
        }
    }
    zan();
}

// 点赞部分
function zan() {
    var zan = document.querySelectorAll('.zan');

    for (var i = 0; i < zan.length; i++) {
        zan[i].setAttribute('index', i);
        zan[i].setAttribute('index2', 0);
        zan[i].onclick = function () {
            var index = this.getAttribute('index');
            var index2 = this.setAttribute('index2', this.getAttribute('index2') - 0 + 1)
            // console.log(index);
            // console.log(this.getAttribute("index"));
            console.log(this.getAttribute('index2'));
            // zan[index].innerHTML = parseInt(zan[index].innerHTML) + 1;
            // zan[index].style.backgroundImg = 'url(img/xinRedh.png)'
            if (this.getAttribute('index2') % 2) {
                this.style.backgroundImage = "Url(./css/img/xinRedh.png)";
                this.style.backgroundSize = "12px";
                this.innerHTML = parseInt(this.innerHTML) + 1;
            } else {
                this.style.backgroundImage = "Url(./css/img/xin.png)";
                this.style.backgroundSize = "12px";
                this.innerHTML -= 1;
            }
        }
    }
}
zan();


// 倒计时

var time_ = document.getElementsByClassName('time')[0];
function ti() {
    var nowDate = new Date();
    var targetDate = new Date(2022, 10, 11);
    var date = targetDate - nowDate;
    // console.log(date); 时间是毫秒的
    // 天数
    var day = Math.floor(date / 1000 / 60 / 60 / 24);
    day = day > 10 ? day : '0' + day;
    // 时
    var h = Math.floor(date / 1000 / 60 / 60 % 24);
    // console.log(h);
    h = h > 10 ? h : '0' + h;
    // 分
    var m = Math.floor(date / 1000 / 60 % 60);
    m = m > 10 ? m : '0' + m;

    // 秒
    var s = Math.floor(date / 1000 % 60);
    // console.log(s);
    s = s > 10 ? s : '0' + s;
    // 拼接
    var str = ('申请时间剩余：' + day + '天' + h + '小时' + m + '分钟' + s + '秒')
    // console.log(str);
    time_.innerHTML = str;

    // 到国庆节当天时屏幕显示内容
    if (day <= 0 && h <= 0 && m <= 0 && s <= 0) {
        time_.innerHTML = '国庆节快乐，平安喜乐！';
        clearInterval(timer);
    }
}
var timer = setInterval(ti, 1000);


// 回到顶部
var pic = document.querySelector('#pic');
var back = document.querySelector('.backTop');
var timer = null;
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (scrollTop <= clientHeight) {
        back.style.display = 'none';
    } else {
        back.style.display = 'block';
    }
}
back.onclick = function () {
    timer = setInterval(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop * 6 / 7;
        if (scrollTop == 0) {
            clearInterval(timer)
        }
    }, 30)
}