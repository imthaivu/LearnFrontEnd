import { sum} from "./helpers/tong.js";
import { checkOddEven } from "./helpers/kiemTraChanLe.js";


function ham1(callback, b) {
    console.log("ham1");
    callback();
    console.log(b);
}

function ham2() {
    console.log("ham2");
}
ham1(ham2,10);

sum(2,2,checkOddEven);

//  callback hell is?
a(function(resultFromA) {
    b(resultFromA, function(resultFromB) {
        c(resultFromB, function(resultFromC) {
            d(resultFromC, function(resultFromD) {
                e(resultFromD, function(resultFromE) {
                    f(resultFromE, function(resultFromF) {
                        console.log(resultFromF);
                    });
                });
            });
        });
    });
});





