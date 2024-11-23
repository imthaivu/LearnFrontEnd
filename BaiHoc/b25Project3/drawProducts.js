import { fetchApi } from "./fetchApi.js";
import { API_PRODUCTS } from "./constants.js";
import { API_TOTAL } from "./constants.js";
import { params, products } from "./variable.js";
// const { fetchApi } = require('./categories');




// toi muon them phan stock vao
export const drawProducts = () => {
    console.log(params);

    // solve category first load if category is empty
    let category = '';
    if(params.category !== ""){
        category = `&category=${params.category}`;
    }
    const api = `${API_PRODUCTS}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
    console.log('day la ', api);
    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                return `
            <div class="product__item">
                <img src="${item.images[0]}" alt="" class="product__img">
                <div class="product__name">${item.title}</div>
                <div class="product__price">${item.price}</div>
                <div class="product__discount">${item.discountPercentage}%</div>
                <div class="product__stock">còn: ${item.stock} sản phẩm</div>
            </div>
            `;
            })
            products.innerHTML = htmls.join('');

        })
}

//lay max total
// dua vao dbjson sau 
// 20241122212332
// http://localhost:3001/total

// [
//     48
//   ]

export const getTotal = () => {
    fetchApi(API_TOTAL)
        .then(data => {
            params.total = data[0];
            console.log(params.total);
        })
}



