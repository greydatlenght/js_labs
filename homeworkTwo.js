// Write a JavaScript function to convert a string into lower camel case
// JavaScript Exercises -> javaScriptExercises

let string = "JavaScript Exercises";
const idSpace = string.indexOf(" ");

const first = string.slice(0, idSpace);
const second = string.slice(idSpace + 1);
console.log((first.slice(0, 1).toLowerCase()) + first.slice(1) + second);



// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// только половину строки до @
// robin_singh@example.com -> robin...@example.com

let stringTwo = "robin_singh@example.com";
const idAt = stringTwo.indexOf("@");

console.log(`${stringTwo.slice(0, idAt / 2)}...${stringTwo.slice(idAt)}`);
