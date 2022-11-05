function showData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    ajax_.open('get', 'http://127.0.0.1:3000/play/new')
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText)
                show(data)
                console.log(data);
            }

        }
    }
}

// function render(data_) {
//     var str = ''
//     for (var item of data_) {
//         console.log(item);


//         str += `




//         `
//     }
// }
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