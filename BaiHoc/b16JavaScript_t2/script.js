var age = 18;
var res = age > 18 ? "du tuoi mua bia" : "chua du tuoi"
console.log(res);

var a = 6;
switch (a) {
    case 4:
        console.log('4');

        break;
    case 5:
        console.log('5');

        break;

    default:
        console.log('!= 4 && != 5');

        break;
}

// object
var infoUser = {
    name: 'thai',
    mail: 'imquocthai',
    age: 22
}



console.log('name: ', infoUser.name)
//for in
console.log('for in----------------')
for (const key in infoUser) {
    if (Object.prototype.hasOwnProperty.call(infoUser, key)) {
        const element = infoUser[key];
        console.log(key + ' ' + element);
    }
}





// array object
var listInforUser = [
    {
        name: 'thai',
        mail: 'imquocthai',
        age: 22
    },
    {
        name: 'thai2',
        mail: 'imquocthai2',
        age: 222
    },
    {
        name: 'thai3',
        mail: 'imquocthai3',
        age: 223
    }
]


console.log('for each----------------')
//for each
listInforUser.forEach(ob => {
    //doc tung phan tu
    for (const key in ob) {
        if (Object.prototype.hasOwnProperty.call(ob, key)) {
            const element = ob[key];
            console.log(key, ': ', element);
        }
    }
});


// LET
//use for block scope
if (true) {
    let bienLet = 10;
    var bienVar = 10;
    console.log('bien let (let it in )', bienLet);
    console.log('bien var', bienVar);
}
console.log('bien let', bienLet);
console.log('bien var', bienVar);





