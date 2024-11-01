// console.log(window)
// //lay thuoc tinh
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// open tab
var win;
function openWindow() {
    win = window.open("https://www.google.com", "", "width=400, height=400")
}
function closeWindow() {
    win.close()
}

// location
console.log(window.location)
var url = window.location.href
console.log(url)

setTimeout(()=> {
    console.log(url)
}, 2000)

// screen
let screenW = window.screen.width
let screenH = window.screen.height
console.log('widthW: ', screenW)
console.log('heightW: ', screenH)

// reload
function reload() {
    window.location.reload()
}

// setInterval(()=>{
//     console.log('reload')
//     window.location.reload()
// }, 5000)
// history
console.log('history')
console.log(window.history)

// cookie
function setCookie(cname, cval, exday) {
    let date = new Date();
    date.setTime(date.getTime() + (exday * 24 * 60 * 60 * 1000)); // Tính toán thời gian hết hạn
    let expires = "expires=" + date.toUTCString(); // Chuyển đổi ngày thành định dạng UTC
    document.cookie = cname + "=" + cval + "; " + expires + "; path=/"; // Thiết lập cookie
}


function login(){
    if(true){
        setCookie('username', 'admin', 1);
        setCookie('password', '123456', 2);
        setCookie('email', 'imquocthai', 3);

    }
}

function deleteCookie(cname){
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

function deleteToken(){
    deleteCookie('username');
    deleteCookie('password');
    deleteCookie('email');
    console.log('delete cookie')
}