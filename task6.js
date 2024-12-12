'use strict';

if (confirm('Should I calculate the square root?')) {
    const input = prompt('Enter a number:');
    const number = Number(input);

    if (isNaN(number)) {
        document.body.innerHTML = '<p>Please enter a valid number.</p>';
    } else if (number < 0) {
        document.body.innerHTML = '<p>The square root of a negative number is not defined.</p>';
    } else {
        const squareRoot = Math.sqrt(number);
        document.body.innerHTML = `<p>The square root of ${number} is ${squareRoot.toFixed(2)}.</p>`;
    }
} else {
    document.body.innerHTML = '<p>The square root is not calculated.</p>';
}
