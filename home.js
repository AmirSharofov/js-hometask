// let index = prompt("Введите число:")
// let arr = ["Aleksey", "Kartoshka", "Margarita", "Morgenshtern", "Monica"]
// let find = false

// for(let m = 0; m < arr.length; m++) {
//     if(m == index) {
//         find = true;
//         arr.splice(m, 1);
//         console.log("Элемент успешно удален из массива.");
//         break;      
//     }
// }
// if(!find) {
//     console.log("Токого элемента нет в массиве.");
// }
// console.log(arr);

let arr2 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let numeral = 0 
for(let n = 0; n < arr2.length; n++){
    if (typeof arr2[n] === 'number') {
        numeral++;     
    }
}

if (numeral > 5) {
    console.log('good');
}else{
    console.log('bad');
}