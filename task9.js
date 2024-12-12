'use strict';
const number = Number(prompt('Enter an integer:'));

if (isNaN(number) || !Number.isInteger(number)) {
    document.body.innerHTML = '<p>Please enter a valid integer.</p>';
} else if (number <= 1) {
    document.body.innerHTML = `<p>${number} is not a prime number.</p>`;
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.body.innerHTML = `<p>${number} is a prime number.</p>`;
    } else {
        document.body.innerHTML = `<p>${number} is not a prime number.</p>`;
    }
}
