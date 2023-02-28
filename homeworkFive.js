// 1. Дан массив с числами. Запишите в новый массив только те числа, которые
// больше нуля и меньше 10-ти. Для этого используйте вспомогательную
// функцию isNumberInRange, которая параметром принимает число и
// проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция
// возвращает true, если не так - false.

function isNumberInRange(_number) {
  let status;
  _number > 0 && _number < 10 ? (status = true) : (status = false);
  return status;
}

const array = [-3, -2, 1, 3, -4, 9, 123];
let clearArray = [];

for (let i = 0; i < array.length; i++) {
  if (isNumberInRange(array[i])) {
    clearArray.push(array[i]);
  }
}

console.log(clearArray);

// 2. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние
// возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
// Например. 33 – зрелый

function statusPeople(_number) {
  let status;

  _number >= 1 && _number <= 17 ? (status = "ребёнок") : (status = status);
  _number >= 18 && _number <= 30 ? (status = "молодой") : (status = status);
  _number >= 30 && _number <= 55 ? (status = "зрелый") : (status = status);
  _number >= 55 ? (status = "старый") : (status = status);

  return `${_number} ${status}`;
}

for (let i = 1; i < 101; i++) {
  console.log(statusPeople(i));
}

// 3. Напишите функцию, которая очищает массив от
// нежелательных значений, таких как false, undefined, пустые
// строки, ноль, null.

function cleanFunc(array) {
  let cleanedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] != false &&
      array[i] != undefined &&
      array[i] != " " &&
      array[i] != 0 &&
      array[i] != null
    ) {
      cleanedArray.push(array[i]);
    }
  }

  return cleanedArray;
}

let arrayTwo = [null, 1, 2, 3, 4, false];
console.log(cleanFunc(array));

// 4. Напишите функцию, которая убирает повторяющиеся
// значения.

function includesCheck(array) {
  let clearArray = [];
  for (let i = 0; i < array.length; i++) {
    if (clearArray.includes(array[i]) == false) {
      clearArray.push(array[i]);
    }
  }
  return clearArray;
}

arrayThree = [1, 1, 1, 2];
console.log(includesCheck(arrayThree));
