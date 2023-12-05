// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }  
// }

// console.log(min(6, 6));


// function evenOdd(n) {
//     if (n % 2 == 0) {
//         return 'Число четное'
//     } else {
//         return 'Число не четное'
//     }
// }

// console.log(evenOdd(3));


// function squareNumber(n) {
//     console.log(n * n);
// }

// squareNumber(5);


// function squareNumber(n) {
//     return n * n
// }

// console.log(squareNumber(4));


// function userAge() {
//     let negativeNum = prompt('Сколько Вам лет?');
//     if (negativeNum < 0) {
//         return 'Вы ввели неправильное значение'
//     } if (negativeNum >= 0 && negativeNum <= 12) {
//         return 'Привет, друг'
//     } if (negativeNum >= 13) {
//         return 'Добро пожаловать!'
//     }
// }

// console.log(userAge());



// function correctNumber(num1, num2) {
//     if (typeof num1 !='number' || typeof num2 !='number') {
//         return 'Одно или оба значения не являются числом'
//     } else {
//         return num1 * num2
//     }
// }

// console.log(correctNumber(3, 'Олег'));



// function userCube(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Переданный параметр не является числом'
//     } else {
//         return a * b
//     }
// }

// console.log(userCube(4, 3));


// function cubeNumber() {
//     let num = prompt('Введите число');
//     num = Number(num);
//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом'
//     } else {
//         return `${num} в кубе равняется ${num ** 3}`
//     }
// }

// console.log(cubeNumber());


function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea,
    getPerimeter,
}

const circle2 = {
    radius: 10,
    getArea,
    getPerimeter,
}

circle1.getArea();
circle2.getArea();







