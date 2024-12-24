import {sum} from './sum.js'
import {a, b} from './constant.js'
// import thongBao,{tong as tong2, hieu as hieu2, tich as tich2, thuong as thuong2} from './tinhToan.js'
import thongBao from './tinhToan.js'
import { tong as tong2, hieu as hieu2, tich as tich2, thuong as thuong2 } from './tinhToan.js'
console.log(sum(a,b)) // 30

// tinh toan
console.log(tong2(a,b)) // 50
console.log(hieu2(a,b)) // -10
console.log(tich2(a,b)) // 600
console.log(thuong2(a,b)) // 0.6666666666666666
console.log(thongBao)//----function thong bao
console.log(thongBao())//----return value thong bao
