//TODO:=========task-02================= HOMEWORK!!!
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.
// const str = 'JavaScript, HTML, CSS, React';
// const wordsArray = str.split(", ");
// for (const word of wordsArray) {
  // console.log(word);
// }
// 
// 
//TODO:=========task-03=================
// Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.
// const message = 'JavaScript is a popular programming language.';
// const words = message.split(" ");
// let quantity = 0;

// for (const element of words) {
  // quantity += 1;
// }
// console.log(quantity);

//  мне было бы проще через words.length //

//TODO:=========task-04=================
// Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ['JavaScript', 'HTML', 'CSS', 'React'];
// console.log(words.join(", "));

//TODO:=========task-05=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

const stringArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';
const elementIndex = stringArray.indexOf(substring)
const joinedArray = [];

for (let i = 0; i < stringArray.length; i++) {
  if (i === elementIndex){
 joinedArray.push(stringArray[i]); 
}
  
  
  
}

// if (stringArray[i].includes(substring)) {
  // joinedArray.push(stringArray[i]);
// }

  

  console.log(joinedArray);
console.log(
  `Масив елементів, що містять підстроку ${substring} : ${joinedArray}`
);

//TODO:=========task-06=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
//  const array = ['JavaScript', 'HTML', 'CSS', 'SS'];
//  const elem = 'SS';

//TODO:============task-07==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") return "Error";
//     // return Math.min(a, b);
//     return a < b ? a : b;
// }
// console.log(min(5, 10));

//TODO:=============task-08=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// function sumAdjacentNumbers(array) {
    // const newArr = [];
    // for (let i = 0; i < array.length -1; i++) {
        // console.log(array[i]);
      //  newArr.push(array[i] + array[i+1]) 
    // }
    // return newArr;
// }
// 
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// 
// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:=========task-09=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа. Array.from()

// console.log(calculateAverage(10, 10, 20, 200));

//TODO:=============task-10=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

// const str = "This is a new line";
// const vowels = ["a", "e", "i", "o", "u"];

// console.log(countVowels(str));

//TODO:=========task-11=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11];

// console.log(getOddNumbers(numbers));

















































