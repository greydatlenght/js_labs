// Напишите программу на JavaScript, которая принимает десять целых чисел как массив и отображает большее

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i2 = array[0];
for (let i = 0; i < array.length; i++) if (i2 < array[i]) i2 = array[i];
console.log(i2);

console.log(" ")

// Напишите программу на JavaScript, которая будет пробегать по числам от 0 до 15.
// Для каждого он будет проверять, является ли текущее число нечетным или четным, и отображать сообщение на экране.

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " - Чётное");
    } else { console.log(i + " - Нечётное"); }
}

console.log(" ")

// Напишите программу, которая принимает два массива, один с именами студентов, второй с одной оценкой, каждого студента
// Проверяйте, что бы массивы были одинаковыми по количеству элементов
// На выводе программа должна выдать среднюю оценку по студентам
// И оценку каждого студента буквой: <60 - F, <70 - D, <80 - C, <90 - B, <100 - A

const firstArray = [10, 92, 69, 79, 80];
const secondArray = ['Валерий', 'Игорь', 'Евгений', 'Антон', 'Андрей'];

let resultOne = 0;
for (let i = 0; i < firstArray.length; i++) {
    resultOne += firstArray[i];
}
resultOne = resultOne / firstArray.length;
console.log(`Средняя оценка по студентам = ${resultOne}`);

let gradeLetter = " ";
for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] < 60) { gradeLetter = "F" } else if (firstArray[i] < 70) { gradeLetter = "D" } else if (firstArray[i] < 80) { gradeLetter = "C" } else if (firstArray[i] < 90) { gradeLetter = "B" } else if (firstArray[i] < 100) { gradeLetter = "A" };

    console.log(`Оценка студента "${secondArray[i]}" = ${gradeLetter}`);
}

console.log(" ")

// Написать программу принимающую строчку, внутри которой есть несколько записей вида "$120", нужно вывести ВСЕ числа после доллара
// Пример: "Есть несколько товаров по $120 и $20 и $70 все они крутые" - > 120 20 70

const string = "Есть несколько товаров поfdsfsdfdsf $4235435120 и fsdsdfsdf $235453450 иsdfsdfsd $753453450 все они $52354325 крутые";
let numbersArray = [];

for(i = 0; i < string.length; i++) {
    if (string[i] == "$") {
        dolIndex = string.indexOf('$', i);
        let unDolSpaces = 0;
        for (let j = dolIndex; j < string.length; j++) {
            if (string[j] == " ") {
                unDolSpaces = j;
                break;
            }
        }
        numbersArray.push(string.slice(dolIndex + 1, unDolSpaces));
        i++;
    } 
}
console.log(numbersArray.join(" "));

console.log(" ");

// Write a JavaScript conditional statement to sort ten numbers.

const tenArray = [2, 0, 8, 3, 7, 5, 6, 1, 4, 9];
for (let i = 0; i < tenArray.length; i++) {
    for (let j = i + 1; j < tenArray.length; j++) {
        if (tenArray[i] > tenArray[j]) {
            let testValue = tenArray[i];
            tenArray[i] = tenArray[j];
            tenArray[j] = testValue;
        }
    }
}

console.log(tenArray);
