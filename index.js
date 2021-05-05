let People = require('./People.js');

let people = new People();

/**
 * pass the weight category ad argument to get the values 
 * pass the category name as argument which is one of the values below
 * Underweight, Normal weight, Overweight, Moderately obese, Severely obese, Very Severely obese
 */
console.log(people.getPeopleBasedOnCategory('Overweight'));

/**
 * pass the risk category as the argument to fetch the content from the files
 * prints the array with person details
 * option to pass the argument Malnutrition risk, Low risk, Enhanced risk, Medium risk, High risk, very high risk
 */
console.log(people.getPeopleBasedOnRiskCategory('Very High risk'));