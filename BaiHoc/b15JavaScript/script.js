var button = document.querySelector("button");
button.onclick = function () {
    alert("hello world")
}

var listUser = ["len van A", " Nguyen thi B", "Do van C"]
// console.log
console.log(listUser)
// confirm
// var result = confirm("vui long xac nhan human")
// if(result === true){
//     console.log("ban duoc vao trang web")
// } else {
//     console.error("ban khong duoc vao ")
// }
// prompt
// var nameOfCelebriti = prompt("nhap ten nguoi noi tieng ban muon xem", "chi pu")
// console.log("day la cac bo phim cua " + nameOfCelebriti);

// ham set time out
// sau 5 giay no se goi cai ham do ra
setTimeout(function(){
    console.log("link cua ban sau 5 giay doi");
}, 5000)

// type of 
var a = "apple";
var b = 10;
console.log(typeof b === "number");
// string function
// indexof
var myString = 'xin chao, toi la thai toi'
console.log(myString.indexOf('toi',17));//tu pos = 117
console.log(myString.indexOf('toi'))
console.log(myString.indexOf('yeu'))

// lastindexof
console.log(myString.lastIndexOf('toi'))

// slice [4,8)
console.log(myString.slice(4,8))
console.log(myString.slice(-20))

// replace
console.log(myString.replace(/toi/g, 'minh'))

// uper lower case
console.log(myString.toUpperCase());
console.log(myString.toLocaleLowerCase());

// split
console.log(myString.split(", "))
console.log(myString.split(" "), 2); // lay toi da 2 phan tu
// isNaN
var a = 10/"a";
console.log(isNaN(a));

// toString
var b = 10;
console.log(b.toString());
console.log((10).toString());

// tofixed
var c = 12.345;
console.log(c.toFixed(2));
console.log(c.toFixed(5));


//ARRAY
var list = ['html', 'css', 'js'];
console.log(list.toString());
console.log('sau khi join')
console.log(list.join(", "));
// pop
console.log(list.pop());
console.log(list.toString());

//push
console.log(list.push('reac'));// return so luong phan tu
console.log(list.toString());

//unshift
console.log(list.unshift('1', '2', '3'))
console.log(list.toString());

//shift
console.log(list.shift());
console.log(list.toString());

// slice xoa || chen
list = ['html', 'css', 'js', 'bootstrap']
console.log('slice 1 3');
console.log(list.slice(1,3));

// vi tri  chen vao 1 ma khong xoa phan tu nao
list.splice(1, 0, 'thai', 'vu');  // Chèn 'thai' và 'vu' vào vị trí 1, không xóa phần tử nào
console.log(list);  // ['html', 'thai', 'vu', 'css', 'js', 'bootstrap']

// concat
list2 = ['phan tu 1', 'phan tu 2']
console.log(list.concat(list2));

