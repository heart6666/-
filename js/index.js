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