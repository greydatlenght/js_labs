// Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный
// список. В качестве аргументов функция должна принимать: массив строк с исходными
// email адресами, массив строк с email адресами в чёрном списке.

function filter(emailArray, blackEmailArray) {
  let clearArray = [];
  for (let i = 0; i < emailArray.length; i++) {
    if (emailArray.includes(blackEmailArray[i]) == false) {
      clearArray.push(emailArray[i]);
    }
  }
  return clearArray;
}

const emailArray = ["o@outlook.com", "hr6zdl@yandex.ru", "kaft93x@outlook.com"];
const blackEmailArray = ["kaft93x@outlook.com"];

console.log(filter(emailArray, blackEmailArray));

// Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины
// товаров после применения всех скидок. В качестве аргументов функция принимает 3
// параметра:
//  Общая сумма корзины
//  Количество товаров в корзине
//  Промокод (по умолчанию null)

function calculate(price, count, promo) {
  let finalPrice = price;
  if (promo == "ДАРИМ300") {
    finalPrice -= 300;
  }

  if (promo == "СКИДКА15" && price >= 20000) {
    finalPrice -= (finalPrice / 100) * 15;
  }

  if (count >= 10) {
    finalPrice -= (finalPrice / 100) * 5;
  }

  if (price >= 50000) {
    finalPrice -= (finalPrice / 100) * 20;
  }

  return finalPrice;
}

console.log(calculate(20000, 12, "СКИДКА15"));
