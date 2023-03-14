//Задание 6
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

user = {
  John: 100,
  Ann: 160,
  Pere: 130,
};

let sum = 0;
for (let i in user) {
  sum += user[i];
}

console.log(sum);

//Задание 7
// У нас есть следующий объект:
let user2 = {

};
// Проверьте программно, что этот объект не пустой и что в нем есть ключ age.
// console.log(typeof user2.age == "object");
console.log(!Object.keys(user2).length)
console.log("age" in user2);

//Задание 9
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
let obj = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let i in obj) {
    typeof obj[i] == "number" ? (obj[i] = obj[i] * 2) : null;
  }

  return obj;
}
console.log(multiplyNumeric(obj));
