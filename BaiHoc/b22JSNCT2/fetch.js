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
console.log('fetchapi')

fetchApi("http://localhost:3000/categories")
.then(data => console.log('data categories:',data));



// in ra html
console.log('print products')

fetchApi("http://localhost:3000/products")
.then(data => {
    console.log(data);
    // let products = data.products;
    let html = "";
    data.forEach(product => {
        html += `
            <div class="product">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
    const productsElement = document.querySelector("#products");
    productsElement.innerHTML = html;
})

// fetchApi Async Await

console.log('fetchapi async await')

// vua xoa async await


// 
// fetchApiAsyncAwait("https://dummyjson.com/products")
// .then(data => {
//     console.log(data);
//     let products = data.products;
//     let html = "";
//     products.forEach(product => {
//         html += `
//             <div class="product">
//                 <img src="${product.thumbnail}" alt="${product.title}">
//                 <h3>${product.title}</h3>
//                 <p>${product.description}</p>
//                 <p>Price: $${product.price}</p>
//                 <button>Add to Cart</button>
//             </div>
//         `;
//     });
//     const productsElement = document.querySelector("#products");
//     productsElement.innerHTML = html;
// })

