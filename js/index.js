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
    if (nums.innerHTML == -1 + '台') {
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
var index = 0;
function show(data) {
    // var str = ''
    // console.log(data);
    // var index = 0;
    for (var item of data) {
        console.log(item);
        for (var item2 of item) {
            // console.log(item2);
            // console.log(item2[index]);
            //     str += `<li><a href="#">
            //     <img src="${item2.img}" alt="" width="220" height="130">
            //     <div class="bottom">
            //         <p>${item2.text}
            //             <span>${item2.description}</span>
            //         </p>

            //         <div class="gray">
            //             <span class="price0">${item2.price}</span>
            //             <div class="right">
            //                 <span>${item2.like}</span>
            //                 <span>${item2.words}</span>
            //             </div>
            //         </div>
            //     </div>
            // </a></li>`
            var ul = document.getElementsByClassName('list')[0];

            var li = document.createElement('li');
            var a = document.createElement('a');
            li.appendChild(a);
            var img = document.createElement('img');
            img.src = item2.img;
            img.width = '220';
            img.height = '130';
            a.appendChild(img);
            var bottom = document.createElement('div');
            bottom.className = 'bottom';
            a.appendChild(bottom);
            var p = document.createElement('p');
            bottom.appendChild(p);
            p.innerHTML = item2.text;
            var span1 = document.createElement('span');
            span1.innerHTML = item2.description;
            p.appendChild(span1);
            var gray = document.createElement('div');
            gray.className = 'gray';
            bottom.appendChild(gray);
            var span2 = document.createElement('span');
            span2.className = 'price0';
            span2.innerHTML = item2.price;
            gray.appendChild(span2);
            var right = document.createElement('div');
            right.className = 'right';
            gray.appendChild(right);
            var span3 = document.createElement('span');
            span3.innerHTML = item2.like;
            right.appendChild(span3);
            var span4 = document.createElement('span');
            span4.innerHTML = item2.like;
            right.appendChild(span4);
            ul.appendChild(li);
        }

        //                       <div class="gray">
        //             //             <span class="price0">${item2.price}</span>
        //             //             <div class="right">
        //             //                 <span>${item2.like}</span>
        //             //                 <span>${item2.words}</span>
        //             //             </div>
        //             //         </div>
    }
    // ul.appendChild(str)
}