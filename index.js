let People = require('./People.js');

let people = new People();

/**
 * pass the weight category ad argument to get the values 
 * pass the category name as argument which is one of the values below
 * Underweight, Normal weight, Overweight, Moderately obese, Severely obese, Very Severely obese
 */
console.log(people.getPeopleBasedOnCategory('Overweight'));

console.log(people.getPeopleBasedOnRiskCategory('Very High risk'));