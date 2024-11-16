const inputName = document.querySelector('input');
const btnSubmit = document.querySelector('#send');
const btnDelete = document.querySelector('#clear');
const res = document.querySelector('#result');

// session 10mb
//cookie 4kb
btnSubmit.addEventListener('click', () => {
  // nhap vao localStorage 10mb
  const name = inputName.name;//attribute name
  const value = inputName.value;
  if (!value) return;
  // console.log(name, value); // email, thai@
  localStorage.setItem(name, value);
  const email = localStorage.getItem(name);//key
  res.innerHTML = email;
});

btnDelete.addEventListener('click', () => {
  localStorage.removeItem('email');
   res.innerHTML = '';
});

let count = 0;
buttonUp.addEventListener('click', () => {
  count++;
  localStorage.setItem(`key${count}`, `value${count}`);// nối chuỗi 
  res.innerHTML = count;
});

//clear all
buttonClearAll.addEventListener('click', () => {
  localStorage.clear();
  res.innerHTML = '';
});

// get all
for (const key in localStorage) {
  console.log(key);  
}

sessionStorage.setItem('token', 'fakjsdhfqeuroqiuwer');
// console.log(sessionStorage.key(0));
// console.log(sessionStorage.getItem('token'));
