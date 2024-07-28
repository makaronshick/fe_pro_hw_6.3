"use strict";
/* 
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
Наприклад:
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);
console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const array = [4, 4, 1, 4, 3, 4, 4, 6, 2, 4, 4, 4, 5, 4, 7, 4, 4, 4, 4, 4, 4];

function removeElement(array, value) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] !== value) {

      resultArray.push(array[i]);
    }
  }

  return resultArray;
}

const result = removeElement(array, 4);
console.log(result);                    // Результат: [1, 3, 6, 2, 5, 7]
