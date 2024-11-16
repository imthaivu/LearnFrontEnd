export function tong(a,b){
    return a+b;
}

export function hieu(a,b){
    return a-b;
}

export function tich(a,b){
    return a*b;
}

export function thuong(a,b){
    return a/b;  
}

// 1 file chi duoc 1 lan export default
export default function thongBao(){
    return 'thong bao ...';
}
// export {tong as sum2, hieu as sub, tich as mul, thuong as div}