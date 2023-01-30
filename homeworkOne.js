// 1.	Найти произведение и сумму цифр заданного трехзначного числа.
let userNumber = 777;

let firstNumber = Math.floor(userNumber / 100);
let secondNumber = Math.floor((userNumber - firstNumber * 100) / 10);
let thirdNumber = userNumber - (Math.floor(userNumber / 10) * 10);

console.log(`Произведение цифр заданного числа = ${firstNumber*secondNumber*thirdNumber}. Сумма цифр заданного числа = ${firstNumber+secondNumber+thirdNumber}.`);



// 2.	Дано двузначное число. Поменять местами цифры в числе.
let doubleDigitNumber = -17;

let firstNumberTwo = Math.floor(Math.abs(doubleDigitNumber) / 10);
let secondNumberTwo = Math.floor(Math.abs(doubleDigitNumber) - (firstNumberTwo * 10));

console.log(`Число с перевёрнутыми цифрами: ${secondNumberTwo}${firstNumberTwo}.`)



// 3.	Вычислить дробную часть среднего арифметического двух заданных положительных вещественных чисел.
let threeFirstNumber = 10.16;
let threeSecondNumber = 50.25;

let threeFirstNumberPart = Math.floor((threeFirstNumber - Math.floor(threeFirstNumber)) * 100);
let threeSecondNumberPart = Math.floor((threeSecondNumber - Math.floor(threeSecondNumber)) * 100);

let threeSum = threeFirstNumberPart + threeSecondNumberPart;

console.log(`Дробная часть среднего арифметического = ${threeSum}.`);



// 4.	Даны три числа. Найти среднее арифметическое модулей кубов этих чисел и среднее геометрическое их квадратов.
let fourFirstNumber = 1;
let fourSecondNumber = 2;
let fourThirdNumber = 3;

let fourFirstTask = (Math.abs(fourFirstNumber**3) + Math.abs(fourSecondNumber**3) + Math.abs(fourThirdNumber**3)) / 3;
let fourSecondTask = (fourFirstNumber**2 + fourSecondNumber**2 + fourThirdNumber**2)**(1/3);

console.log(`Среднее арифметическое модулей кубов чисел ≈ ${fourFirstTask}. Серднее геометрическое квадратов числе ≈ ${fourSecondTask}.`);
