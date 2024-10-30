// select btn and alert
var btn = document.querySelector("button");
btn.onclick = function(){
    alert("you click btn")
}
//declare users and console
var users = ['thai', 'linh', 'truc']
console.log(users)
// confirm
// var res = confirm("vui long xac nhan tren 18 tuoi")
// if(res) {
//     console.log('ban duoc phep vao')
// } else {
//     console.log('ban khong duoc phep')
// }
// prompt
// var ten = prompt('ten cua ban?', 'thai');
// console.log('ten cua ban la: ', ten);

// ham set time out 3s and message
setTimeout(function(){
    console.log('sau 3 s no se xuat hien')
}, 3000)

// type of 
var a = "apple";
var b = 10;
console.log('type of b:', typeof a)

// string function
// indexof
var myString = 'xin chao, toi la thai toi'
console.log('toi tu index 17 ', myString.indexOf('toi',17));//tu pos = 117
console.log('toi ',myString.indexOf('toi'))
console.log('yeu ',myString.indexOf('yeu'))
console.log('toi regex ', myString.search(/toi/)) // tuong tu indexof
// lastindexof
console.log(myString.lastIndexOf('toi'))

// slice [4,8)
console.log('slice')
console.log(myString.slice(4,8))
console.log(myString.slice(-20))// lay 20 ki tu cuoi

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
console.log(a);
console.log('is NaN: ',isNaN(a));

// toString
var b = 10;
console.log(b.toString());
console.log((10).toString());

// tofixed
var c = 12.345;
console.log(c.toFixed(2));
console.log(c.toFixed(5));


//ARRAY
var languages = ['html', 'css', 'js'];
console.log(languages.toString());
console.log('sau khi join')
console.log(languages.join(", "));

// pop
console.log(languages.pop());
console.log('sau khi pop')
console.log(languages.toString());

//push
console.log(languages.push('reac'));// return so luong phan tu
console.log('sau khi push')
console.log(languages.toString());

//unshift
console.log(languages.unshift('1', '2', '3'))
console.log('sau khi unshift')
console.log(languages.toString());

//shift
console.log(languages.shift());
console.log(languages.toString());

// slice xoa || chen
languages = ['html', 'css', 'js', 'bootstrap']
console.log('slice 1 3');
console.log(languages.slice(1,3));

// vi tri  chen vao 1 ma khong xoa phan tu nao
languages.splice(1, 1, 'thai', 'vu');  // Chèn 'thai' và 'vu' vào vị trí 1, không xóa phần tử nào
console.log('splice',languages);  // ['html', 'thai', 'vu', 'css', 'js', 'bootstrap']
// concat
languages2 = ['phan tu 1', 'phan tu 2']
console.log(languages.concat(languages2));

// practice
var mangCacSanPham = ['iphone', 'ipad', 'macbook']
//join
console.log(mangCacSanPham);
console.log(mangCacSanPham.join(', '))

// shift unshift
console.log(mangCacSanPham.unshift('airpod'))
console.log(mangCacSanPham.shift());// khong co airpod

// pop push
console.log(mangCacSanPham.push('ip 15', 'ip 16', 'ip 17'))
console.log(mangCacSanPham.pop())//mat 17
