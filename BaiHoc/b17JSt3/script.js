

// function
// function khong can tham so dau vao


//neu co 2 ham trung ten thi goi vao 
let res = tinhTong(10, 20, 30, 40, 50, 60);
function tinhTong() {
    // chi su dung duoc trong ham thoi
    let tong = 0;
    // dung for of
    for (const element of arguments) {
        tong += element;
    }
    return tong;
}



console.log("tong args: ", res)


// dinh nghia bien o trong ham
function fun1() {
    var a = 10;
    let b = 20;
}

c = 10;//alow
console.log("c = ", c);


//type function

// declaration function: hoisting
console.log('type of function')
hamDeclare();
function hamDeclare() {
    console.log('ham declare')
}
const hamExpress = function () {
    console.log('ham express')
}
hamExpress();
const hamArrow = () => {
    console.log('ham arrow')
}
hamArrow();




//arrow function with args
const tinhTong3 = (...test) => {
    let tong = 0;
    for (const element of test) {
        tong += element;
    }
    return tong;
}




console.log('arrow function with args: ', tinhTong3(1, 2, 3, 4, 5))

// VD 1:  tinh tong cac so chan trong mang
var mang = [1, 2, 3, 4, 5, 6];//khai bao
function tinhTongChan(arr) {
    let tong = 0;
    for (const element of arr) {
        //if even
        if (element % 2 == 0) {
            tong += element;
        }
    }
    return tong;
}
res = tinhTongChan(mang)
console.log('gia tri cua ham tinh tong arrow co args', res)

// tinh tong cac so
// let n = parseInt(prompt('nhap n:'));
// console.log(n);

// do {
//     var n = prompt('nhap so tuoi cua ban');
//     n = parseInt(n);
// } while (n<0);

// console.log(n);




//VD 2: bieu thuc 1/n+2/n+3/n
// let n;
// do {
//     n = prompt('vui long nhap n > 0 ');
// } while (n <= 0);
// console.log('n = ', parseInt(n));

// function tinhTongNghichDao(n) {
//     let tong = 0;
//     for (let index = 1; index < n; index++) {
//         tong+=index/n;

//     }
//     return tong;
// }
// console.log('tong nghich dao cua n = ',tinhTongNghichDao(n))


// try catch

let a = 10;
try {
    console.log('gia tri cua 1 + [thai] ')
    console.log(1 + [thai])

} catch (error) {
    console.log(error)
} finally {
    console.log("dong final nay luon chay")
}




// lam viec voi object nang cao

let user = {
    fullName: 'Dang phuong nam',
    email: 'namest@gmail.com'
}
// assign value

//cach 1
user.phone = '01234'
//cach 2
user['dia-chi'] = '123 cach mang thang 8'

console.log('user: ', user)

// delete key value
console.log('user after delete: ', user)


// lam viec voi array
var nums = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10]
let tong = 0;

// foreach declare
nums.forEach(function (item, index, array) {
    tong += item;
    array[index] = 0;// reset numb
})
console.log('tong of nums: ', tong);
console.log('gia tri cua mang nums: ', nums);

nums.forEach(function(item, index, array){
    tong +=item;
    array[index] = 0;//reset numb
})
console.log('tong of nums: ', tong);

// EVERY true / false

// nums[3] = 1;
const numsRes = nums.every(function (item) {
    return item === 0;
})
// return true if toan bo true
console.log(numsRes)
if (numsRes) {
    console.log('tat ca deu la so 0')
} else {
    console.log('co mot vai so khac 0')
}

// SOME chi can mot vai la duoc
const oLaiLop = nums.some(function (item) {
    return item > 0;
})
console.log('ket qua co bi o lai lop hay khong? ', oLaiLop);
if (oLaiLop) {
    console.log('o lai lop')
} else {
    console.log('len lop')
}

// find
nums = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10]
numKhac0 = nums.find(function (item) {
    return item !== 0;
})

console.log('num khac 0 = ', numKhac0)

//filter
var students = [
    {
        ten: 'thai',
        diem: 3
    },
    {
        ten: 'bao',
        diem: 5
    }, 
    {
        ten:'vu',
        diem:7
    }
]
//item so 5
console.log('xem cac student = 5')
const xemSo5 = students.filter(function (item) {
    return item.diem === 5;
})
console.log(xemSo5)

//item = array
nums = [1,2,3,4,5,6,7,8,9,10]


//item copy
console.log('item copy')
let itemCopy = nums.map(item => {
    return item;
})
console.log(itemCopy)

//tao mang moi
console.log('array ten hocLuc')
let arrTenHocLuc = students.map(item => {
    let ten = item.ten;
    let hocLuc;
    if(item.diem >= 5){
        hocLuc = 'len lop'
    } else {
        hocLuc = 'o lai lop'
    }
    return {
        ten,hocLuc
    }
})
console.log(arrTenHocLuc)

//reduce
// vd 1: tinh tong
tong = nums.reduce((total, item) => {
    console.log(total);
    return total +item;
})
console.log('tong1',tong);
//so 0 la gia tri khoi tao
tong = nums.reduce((total,item) => total+item,0)
console.log('tong2',tong);

// vd 2: tinh tich cac phan tu
let tich = nums.reduce((total,item)=>{
    console.log(total)
    return total*item;
})
console.log('tich1',tich);
tich = nums.reduce((total, item) => total*item,1)
console.log('tich2',tich);
// vd 3: tim so lon nhat
max = nums.reduce((max, item)=>{
    console.log(max)
    
})





































