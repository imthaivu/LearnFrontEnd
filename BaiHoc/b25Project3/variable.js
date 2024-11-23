export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,//trang hien tai
    limit: 8, //gioi han san pham tren 1 trang
    total: 0,  //tong so san pham
    category: ""
};
export const category = document.querySelector('#category')
export const filter = document.querySelector('#filter');
export const products = document.querySelector('#product');
export const inputSearch = document.querySelector('#search input');
export const btnSearch = document.querySelector('#search button');
export const pagination = document.querySelector('#pagination');
export const paginationPrev = document.querySelector('#paginationPrev');
export const paginationNext = document.querySelector('#paginationNext');
export const paginationNumber = document.querySelector('#paginationNumber');