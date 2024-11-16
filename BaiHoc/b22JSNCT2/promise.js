// cac ham setTimeout, setInterval, fetch, axios, readFile, writeFile, request, response, database, file, ... deu la bat dong bo
// bat dong bo: la khi 1 ham chay xong thi ham khac moi chay
// dong bo: la khi 1 ham chay thi ham khac cung chay

// //---------------vi du 1:
// var a =10;

// var promise = new Promise((resolve, reject) => {
//     if(a !== undefined && a!== null && a !== "") {
//         console.log("Thanh cong 1");
//         resolve(a);//thanh cong
//         console.log("Thanh cong 2");
//     } else {
//         reject("Loi");//that bai
//     }

// });


// promise
//     .then((success) => {
//         console.log(success);
//          return success;
//     })
//     .then((success2) => {
//         const b = 20;
//         console.log(success2 + b);
//         return success2 + b;//return 30
//     })
//     .then((success3) => {
//         const c= 30;
//         console.log(success3 + c);
//     })
//     .catch((error) => {
//         console.log("loi:", error);
//     })
//     .finally(() => {
//         console.log("Always run");
//     });

//---> muc dich cua promise la de xu ly bat dong bo, de code dep hon, de hieu hon

//promise la 1 doi tuong, co 3 trang thai: pending, resolve, reject
//promise co 2 tham so: resolve, reject
//pending: dang xu ly-->undefined
//fulfilled: thanh cong-->object Success
//rejected: that bai-->object Error

// //--------------vi du 2:
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve();//thanh cong
//         reject();//that bai
//     },3000);
// });

// setTimeout(()=>{
//     console.log("sau 1 giay:",promise2);
// },1000);

// //sau 2 giay: Promise {<pending>}
// setTimeout(()=>{
//     console.log("sau 2 giay:",promise2);
// },2000);
// //sau 3 giay: Promise {<fulfilled>}
// setTimeout(()=>{
//     console.log("sau 3 giay:",promise2);
// },3000);


//--------------- vi du 3: promise all
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let e = 50;
// let f = 60;

// let sum1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a + b);
//     }, 2000);
// });

// //sum2 sau 4s
// let sum2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(c + d);
//     }, 4000);
// });

// //sum3 sau 6s
// let sum3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(e + f);
//     }, 6000);
// });    
// Promise.all([sum1, sum2, sum3])
// .then(([sum1,sum2,sum3])=>{
//     let sum = sum1 + sum2 + sum3;
//     console.log(sum);
// })
// .catch((error)=>{console.log("Loi:",error);})
// .finally(()=>   {
//     console.log("Always run");
// });

//----------------vi du 4: sync vs async
// console.log("Start");
// setTimeout(() => {
//     console.log("End");
// }, 2000);
//Start roi 2s sau moi in ra End




