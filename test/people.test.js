let assert = require("chai").assert
let People = require("../People")
let people = new People()

describe('People', function(){
    // expecting array from the method of people class 
    it('get peple with higher weight', function(){
        let output = people.getPeopleBasedOnWeightCategory('Overweight')
        assert.isArray(output, 'error')
    })
})
