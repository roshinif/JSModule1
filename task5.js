'use strict';
const target = document.querySelector('#target');

const year = prompt('Please enter the year');

let leap = 'is not';

console.log(year % 4 === 0 && year % 100 !== 0);

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  leap = 'is';
}

const result = `Year ${year}   a leap year`;

target.innerHTML = result;