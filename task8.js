'use strict';
const startYear = Number(prompt('Enter the start year:'));
const endYear = Number(prompt('Enter the end year:'));

if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    document.body.innerHTML = '<p>Please enter valid years, and ensure the start year is less than or equal to the end year.</p>';
} else {
    let leapYears = [];

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }
    if (leapYears.length > 0) {
        let listHtml = '<ul>';
        for (const year of leapYears) {
            listHtml += `<li>${year}</li>`;
        }
        listHtml += '</ul>';
        document.body.innerHTML = listHtml;
    } else {
        document.body.innerHTML = '<p>No leap years found in the given range.</p>';
    }
}
