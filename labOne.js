// Задание 1
// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 —
// первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника,
// противоположные углы которого представлены указанными точками. Выведите
// результат с помощью console.log.
const x1 = 10;
const y1 = 5;

const x2 = 2;
const y2 = 3;

firstSide = x2 - x1;
secondSide = y2 - y1;
let result = Math.sqrt(firstSide ** 2 * secondSide ** 2);

console.log(`Площадь прямоугольника: ${result}.`);

// Задание 2
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся
// числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠
// с помощью console.log.
const n = 2;
const a = 13.890123;
const b = 2.891564;

let resultA = Math.trunc((a - Math.floor(a)) * 10 ** n);
let resultB = Math.trunc((b - Math.floor(b)) * 10 ** n);

console.log(
  `Числа: ${resultA}, ${resultB}.\nСравнение >: ${
    resultA > resultB
  }.\nСравнение <: ${resultA < resultB}.\nСравнение >=: ${
    resultA >= resultB
  }.\nСравнение <=: ${resultA <= resultB}.\nСравнение ===: ${
    resultA === resultB
  }.\nСравнение !=: ${resultA != resultB}.\n`
);

// Задание 3
// Написать генератор нечётных случайных чисел в диапазоне между n и m
// включительно. Учесть, что n и m могут быть отрицательными, а также может быть
// x > y или x < y. Вывести результат с помощью console.log. (Не используя
// ветвление)
const x = 2;
const y = 5;
const randomNumber = Math.trunc(Math.random() * (y - x) + x);

let randomResult = Math.ceil(randomNumber / 2);
randomResult = 2 * randomResult - 1;

console.log(`Результат генератора: ${randomResult}`);
