// Первое задание
// Задание 1
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n
// и m могут быть отрицательными, а также может быть n &gt; m или n &lt; m. Выведите результат с
// помощью console.log.


const n = 100;
const m = -5;
const count = 70;
let array = [];
let add = 0;
let addTwo = 0;

if (n > m) {
    add = n - m;
    addTwo = m;
} else { add = m - n; addTwo = n;}

for (let i = 0; i < count; i++) {
    array[i] = Math.floor((Math.random() * add) + addTwo);
}
console.log(array)

console.log(" ");


// Второе задание
// Задание 2
// С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка
// «Привет, мир!» должна превратиться в «!рим ,тевирП».

let string = "Привет, мир!"
let stringTwo = "";

for (let i = 0; i < string.length; i++) {
    stringTwo += string.at(-i - 1);
}

console.log(string, stringTwo);

console.log(" ");


// Третье задание
// Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть
// представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то
// это мина. Движение танка должно быть представлено как цикл, в котором одна итерация —
// продвижение танка на следующий участок дороги (следующий элемент массива). При
// передвижении выводить в консоль сообщение «танк переместился на ${position}», где
// position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк
// повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва
// танк считается уничтоженным и прекращает движение.
let lastValue = 0;
const mines = [true, true, true, true, true, true, true, true, true, true];


for (let i = 0; i < mines.length; i++) {
    let status = 'Танк в норме';
    if (lastValue == 0 && mines[i + 1] == true) {
        status = 'Танк повреждён';
        lastValue += 1;
    } else if (lastValue == 1 && mines[i + 1] == true) {
        status = 'Танк взорван';
        lastValue += 1;
        console.log("Танк переместился на одной ячейку. Танк уничтожен.");
        break;
    }

    console.log(`Танк переместился на одну ячейку. Статус танка: ${status}.`);
}

console.log(" ");


// Четвёртое задание 

// Задание 4
// Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью
// console.log для каждого из чисел строку ${число} января, ${день недели}. День недели 1
// января должен задаваться с помощью переменной, то есть программа должна корректно
// работать для любого дня недели, с которого начинается месяц.

const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
const firstDay = 'воскресенье';

let j = days.indexOf(firstDay);
for (let i = 1; i <= 31; i++) {
    if (j === days.length) { 
        j = 0; 
    }
    console.log(`${i} января, ${days[j]}`);
    j++;
}


// Другое решение

for (let i = 1; i <= 31; i++) {
  console.log(`${i} января, ${days[(i + days.indexOf(firstDay) - 1) % 7]}`);
}
