// Написать программу проверяющую, является ли число четным, нечетным или не числом

const number = NaN;

// if (typeof number == "number") {
if (!isNaN(number) && isFinite(number)) {
  if (number % 2 == 0) {
    console.log("Число является четным");
  } else {
    console.log("Число является нечетным");
  }
} else {
  console.log("Это не является числом");
}

// Написать программу, проверяющую является ли год високосным

const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(true);
} else { console.log(false) };

// Написать программу, находящую большее из 4 чисел, важно следить за порядком логических выполнений

const a = 5; const b = 2; const c = 3; const d = 4;

if (a > b && a > c && a > d) {

    console.log(`${a} - большее из чисел.`);

} else if (b > a && b > c && b > d) {

    console.log(`${b} - большее из чисел.`);

} else if (c > a && c > b && c > d) {

    console.log(`${c} - большее из чисел.`);

} else {

    console.log(`${d} - большее из чисел.`);;

}

// написать программу, по заданным переменным: число1, число2, операция -> выполнить базовую математическую операцию

const num1 = 1;
const num2 = 2;
let operation = '+';

switch (operation) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    default:
        console.log('Неверная операция');
        break;
}

// Найти по заданному номеру месяца, количество дней в нем

const month = 1;

switch (month) {
    case 1:
        console.log('31 день');
        break;
    case 2:
        console.log('28 дней');
        break;
    case 3:
        console.log('31 день');
        break;
    case 4:
        console.log('30 дней');
        break;
    case 5:
        console.log('31 день');
        break;
    case 6:
        console.log('30 дней');
        break;
    case 7:
        console.log('31 день');
        break;
    case 8:
        console.log('31 день');
        break;
    case 9:
        console.log('30 дней');
        break;
    case 10:
        console.log('31 день');
        break;
    case 11:
        console.log('30 дней');
        break;
    case 12:
        console.log('31 день');
        break;
    default:
      return 'Неизвестный месяц';
}

// Написать программу, которая будет сортировать четыре числа
let numbers = [5, 2, 3, 4];

console.log(numbers.sort());

