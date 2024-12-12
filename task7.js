'use strict';

const numberOfRolls = Number(prompt('Enter the number of dice rolls:'));

if (isNaN(numberOfRolls) || numberOfRolls <= 0) {
    document.body.innerHTML = '<p>Please enter a valid positive number.</p>';
} else {
    let sum = 0;
    for (let i = 0; i < numberOfRolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }
    document.body.innerHTML = `<p>The sum of ${numberOfRolls} dice rolls is: ${sum}</p>`;
}
