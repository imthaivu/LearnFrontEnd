import { drawProducts, getTotal } from "./drawProducts.js";
// import trong variable
import { params } from "./variable.js";
import { filter, inputSearch, btnSearch, paginationPrev, paginationNext, paginationNumber } from "./variable.js";

drawProducts();

// search

const search = () => {
    params.q = inputSearch.value;
    drawProducts();//ve lai product
}

btnSearch.addEventListener('click', function () {
    search();
})



inputSearch.addEventListener('keydown', function (e) {
    // neu enter
    if (e.key === 'Enter') {
        search();
    }
})
//end search
// filter
filter.addEventListener('change', function (e) {
    console.log(e.target.value);
    //sort 
    // mac dinh
    // gia thap den cao
    // gia cao den thap
    // moi nhat
    switch (e.target.value) {
        case 'mac-dinh':
            params.sort = '';
            params.order = '';
            break;
        case 'gia-thap-cao':
            params.sort = 'price';
            params.order = 'asc';
            break;
        case 'gia-cao-thap':
            params.sort = 'price';
            params.order = 'desc';
            break;
        case 'giam-gia-nhieu':
            params.sort = 'discountPercentage';
            params.order = 'desc';
            break;
        default:
            break;
    }
    drawProducts();
})
console.log(filter);


// pagination
{/* <span class="pagination__button" id="paginationPrev">Prev</span>
<span class="pagination__number" id="paginationNumber">1</span>
<span class="pagination__button" id="paginationNext">Next</span> */}

//ham check mau nut
const checkPagination = () => {

    //get total
    getTotal();

    if(params.page <= 1){
        // neu khong thoa dieu kien thi nut Prev mau xam
        paginationPrev.style.background = 'gray';
    } else {
        paginationPrev.style.background = 'orange';
    }
    if(params.page == 1 || params.page < Math.ceil(params.total / params.limit)){
        paginationNext.style.background = 'orange';
    } else {
        paginationNext.style.background = 'gray';
    }
}
checkPagination();
paginationPrev.addEventListener('click', function () {
    if(params.page > 1){
        params.page--;
        paginationNumber.innerHTML = params.page;
        drawProducts();
        checkPagination();
    } 

})
paginationNext.addEventListener('click', function () {
   
    if(params.page == 1 || params.page < Math.ceil(params.total / params.limit)){
        params.page++;
        paginationNumber.innerHTML = params.page;
        drawProducts();
        checkPagination();
    }

})
//end pagination