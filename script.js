"use strict";
/* 
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
Наприклад:
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);
console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const array = [4, 1, 3, 4, 6, 2, 5, 4, 7, 4];

function removeElement(array, value) {
  for (const item of array) {
    
    if (item === value) {
      const index = array.indexOf(item);
      array.splice(index, 1); 
    }
  }

  return array;
};

removeElement(array, 4);
console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
