'use strict'
//Task#1
/* const x = 6;
const y = 4;
x > y ? console.log('x больше, чем y') : console.log('х не больше, чем у'); */

//Task#2
/* const num = +prompt('Введите число');
if (num % 2 === 0){
    console.log(`Число ${num} чётное`)
} else {
    console.log(`Число ${num} нечётное`)
} */

//Task#3
/*let num = prompt('Введите целое число');
let numLength;
if (Number(num) >= 0) {
    switch (num.length) {
        case 1:
            numLength = 'однозначное';
            break;
        case 2:
            numLength = 'двузначное';
            break;
        case 3:
            numLength = 'трехзначное';
            break;
        default:
            numLength = 'очень большое'
    }
} else {
    switch (num.length - 1) {
        case 1:
            numLength = 'однозначное';
            break;
        case 2:
            numLength = 'двузначное';
            break;
        case 3:
            numLength = 'трехзначное';
            break;
        default:
            numLength = 'очень большое'
    }
}
Number(num) < 0 ? console.log(`Число ${num} ${numLength} отрицательное`) : console.log(`Число ${num} ${numLength} положительное`);*/

//Task#4
/*const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');
if (a>b && a>c){
    console.log(`Число ${a} является наибольшим`)
} else if (b>a && b>c){
    console.log(`Число ${b} является наибольшим`)
} else {
    console.log(`Число ${c} является наибольшим`)
}*/

//Task#5
const a = +prompt('Введите сторону а');
const b = +prompt('Введите сторону b');
const c = +prompt('Введите сторону с');
if (a+b <= c || a+c <= b || c+b <= a){
    console.log('Такой треугольник существовать не может!')
} else {
    console.log('Поздравляем! Вы только что создали треугольник!')
}
