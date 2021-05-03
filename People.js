let userData = require('./data.json');
let BMIValueLimits = require('./BMIValueMap.json');
let fs = require('fs')
module.exports =  class People {
    /**
     * constructor takes the dat from data.json file
     * calculates BMI values
     * decides the category and updates the objects
     */
    constructor() {
        this.userData = userData;
        this.userData.map(user=> {
            user.BMI = (user.WeightKg/(user.HeightCm/100)).toFixed(3);
            let bmiDetails = this.getBMICategoryAndHealthRisk(user.BMI);
            user.BMICategory = bmiDetails.category;
            user.riskStatus = bmiDetails.risk;
        });
        fs.writeFileSync('result.json', JSON.stringify(this.userData))
    }
    /**
     * method for gettng he BMI category and health risk
     * @param {bmiValue} category 
     * @returns {Object}
     */
    getBMICategoryAndHealthRisk(bmiValue) {
        let objectToReturn = new Object();
        Object.keys(BMIValueLimits).filter(category=>{
            if(BMIValueLimits[category].lowerLimit <= bmiValue <= BMIValueLimits[category].upperLimit) {
                objectToReturn.category = BMIValueLimits[category].category;
                objectToReturn.risk = BMIValueLimits[category].healthRiskCategory;
            }
        });
        return objectToReturn;
    }
    /**
     * 
     * @param {string} category 
     * @returns {Array}
     */
    getPeopleBasedOnCategory(category) {
        return this.userData.filter(person=>person.BMICategory == category)
    }
    /**
     * 
     * @param {string} risk 
     * @returns {Array}
     */
     getPeopleBasedOnRiskCategory(risk) {
        return this.userData.filter(person=>person.riskStatus == risk)
    }
}
