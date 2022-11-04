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
                this.style.backgroundImage = "Url(./css/../img/QQ图片20221104120703.png)";
                this.style.backgroundSize = "5px 5px";
                this.innerHTML -= 1;
            }
        }
    }
}
zan();