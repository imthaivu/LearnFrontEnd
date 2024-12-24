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
    name:'thai',
    mail:'imquocthai',
    age:20
}




console.log('name:', infoUser.name);

//for in dung cho mot doi tuong co cac thuoc tinh
console.log('for in 1----------------')
for (const key in infoUser) {
    if (Object.prototype.hasOwnProperty.call(infoUser, key)) {
        const element = infoUser[key];
        console.log(key + ' ' + element);
    }
}


// array object
var listInforUser = [
    {
        name:'thai1',
        email:'imquocthai1'
    },
    {
        name:'thai2',
        email:'imquocthai2'
    },
    {
        name:'thai3',
        email:'imquocthai3'
    }
]




console.log('for each----------------')
//for each
listInforUser.forEach(element => {
    for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
            const value = element[key];
            console.log(`${key} ${value}`)
        }
    }
})


// LET use for block scope
if (true) {
    let bienLet = 10;
    var bienVar = 10;
    console.log('bien let in scope', bienLet);
    console.log('bien var in scope', bienVar);
}
try {
    console.log('bien let out scope', bienLet);
} catch (error) {
    console.log('bien let out scope not found');

}
console.log('bien var out scope', bienVar);





