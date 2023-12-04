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


// function getArea() {
//     const area = 3.14 * this.radius ** 2;
//     return area;
// }

// const circle1 = {
//     radius: 7,
//     area: getArea(),
// }

// console.log(circle1.area());

// const circle2 = {
//     radius: 10,
//     perimeter: getPerimeter(10),
// }

// console.log(circle2.perimeter);







