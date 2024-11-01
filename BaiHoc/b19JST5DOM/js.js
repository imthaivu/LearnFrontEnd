const element =   document.getElementById('test');
console.log(element);

setTimeout(() => {
    element.classList.add('blue');
    element.classList.remove('red'); 
    console.log(element)   
}, 2000);

// get menu
const menu = document.getElementById('menu');
console.log(menu);

// get by element
const menuItems = document.getElementsByTagName('li');
console.log(menuItems);
// determine element 3
const menuItem = menuItems[2];
console.log(menuItem);

// get by class
const titleByClass = document.getElementsByClassName('title');
console.log(titleByClass);

// in ra
console.log(...titleByClass);
console.log([...titleByClass]);
// ep kieu html collection ve mang
[...titleByClass].forEach(element => {
    // console.log(element);// in ra
    element.classList.add('blue');
    element.classList.remove('red');
});

// querySelector 1 obj
const active = document.querySelector('.box-2 .link')
console.log(active)
// active
active.classList.add('active')

// querySelector objs
const actives = document.querySelectorAll('.box-2 .link')

actives.forEach(ele => {
    ele.classList.add('active')
})
// ----> query select lấy được tất cả id, class, css




