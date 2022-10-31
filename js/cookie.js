// setcookie()创建cookie
// 键 值 时间 几天后

function setCookie(key, val, time) {
    // 存值
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${val};expires=${date}`
}

// getcookie()获取cookie
function getCookie(key) {
    var arr = document.cookie.split('; ');
    for (var item of arr) {
        var newArr = item.split('=');
        if (newArr[0] == key) {
            return newArr[1];
        }
    }
}
// removecookie()删除cookie

function removeCookie(key) {
    this.setCookie(key, '', -1);
}


//  clearCookie清除cookie
function clearCookie() {
    var arr = document.cookie.split('; ');
    for (var item of arr) {
        // console.log(item);
        var newArr = item.split('=');
        console.log(newArr);
        this.setCookie(newArr[0], '', -1);
    }
}