'use strict';
const numDice = Number(prompt('Enter the number of dice:'));
const desiredSum = Number(prompt('Enter the sum of the dice:'));

if (isNaN(numDice) || isNaN(desiredSum) || numDice <= 0 || desiredSum <= 0) {
    document.body.innerHTML = '<p>Please enter valid positive numbers for the number of dice and the desired sum.</p>';
} else {
    const iterations = 10000;
    let matchingRolls = 0;
    for (let i = 0; i < iterations; i++) {
        let sum = 0;

        for (let j = 0; j < numDice; j++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            sum += roll;
        }
        if (sum === desiredSum) {
            matchingRolls++;
        }
    }

    const probability = (matchingRolls / iterations) * 100;


    document.body.innerHTML = `
        <p>Probability to get sum ${desiredSum} with ${numDice} dice is ${probability.toFixed(2)}%.</p>
    `;
}
