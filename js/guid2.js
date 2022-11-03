function showData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // 接收响应数据  转为 对象
                var data = JSON.parse(ajax_.responseText);
                console.log(data);
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
// console.log(playmore);
function show(data) {
    // console.log(data[index]);
    // console.log(data.length);
    if (flag) {
        index++;
        // console.log(index);
        if (index >= 0) {
            playmore.background = '';
            playmore.innerHTML = '数据加载完毕！'
            flag = false;
        }
        // 遍历获取数据每一项
        // console.log(item);
        // console.log(data[0]);
        for (var item of data) {
            console.log(item);
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
            // var span2 = document.createElement('span');
            // span2.className = 'price0';
            // span2.innerHTML = item.price;
            // gray.appendChild(span2);
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
            var listbg = document.createElement('div');
            listbg.className = 'listbg';
            a.appendChild(listbg)
            ul.appendChild(li);
            // <div class="listbg"></div>

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
                this.style.backgroundImage = "Url(../css/img/xinRedh.png)";
                this.style.backgroundSize = "12px";
                this.innerHTML = parseInt(this.innerHTML) + 1;
            } else {
                this.style.backgroundImage = "Url(../css/img/xin.png)";
                this.style.backgroundSize = "12px";
                this.innerHTML -= 1;
            }
        }
    }
}
zan();
