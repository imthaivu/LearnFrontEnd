import { fetchApi } from './fetchApi.js';
import { API_PRODUCTS } from './constants.js';
import { params } from './variable.js';
import { drawProducts } from './drawProducts.js';

// hay viet lai ham fetchapi dua tren api tren



// lay category trong moi product
// fetchApi('http://localhost:3001/products')
//     .then(data => {
//         console.log(data);
//         let htmls = data.map(item => {
//             console.log(item);
//             return `
//             <div class="category__item">${item}</div>
//             `;
//         })
//         console.log(htmls.join(''));
//     })

// lay ra tat ca cac category
fetchApi(API_PRODUCTS)
    .then(data => {
        let categories = data.map(item => item.category);
        let uniqueCategories = [...new Set(categories)];

        let htmls = uniqueCategories.map(item => {
            return `
            <div class="category__item" data-category=${item}>${item}</div>
            `;
        })
        category.innerHTML = htmls.join('');

        // click vao category
        const categoryItems = document.querySelectorAll('.category__item');// bien nay phai khoi tao sau khi category.innerHTML = htmls.join(''); vi no chua co du lieu
        categoryItems.forEach(item => {
            item.addEventListener('click', function () {
                // params.category = item.dataset.category;//dung dataset
                //hoac dung 
                params.category = item.getAttribute('data-category');
                console.log(params);
                drawProducts();
            })
        }
        )
    })
    .catch(error => {
        console.log(error);
    })



