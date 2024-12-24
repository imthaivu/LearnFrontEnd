import { fetchApi } from './helpers/fetchApi.js';

// fetchApi function
// const fetchApi = (url) => {
//     const result = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         return data;
//     });
//     return result;
// }   
// use fetchApi function print categories
console.log('fetchapi first')

// fetchApi("http://localhost:3000/categories")
// .then(data => console.log('data categories:',data));
fetchApi('http://localhost:3000/categories')
.then(data=>{
    console.log('categories',data)
    let html = '';
    data.forEach(category => {
        html += `
         <button>${category.name}</button>
        `
    })
    //gan vo
    const categories = document.querySelector('#category');
    categories.innerHTML = html;
})



// in ra html
console.log('print products')



fetchApi('http://localhost:3000/products')
.then (data =>{
    console.log(data);//print console
    let html = "";
    data.forEach(product => {
        html += ` <div class="product">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button>Add to Cart</button>
            </div>`;
    })
    const productsElement = document.querySelector('#products');
    productsElement.innerHTML = html;
})

