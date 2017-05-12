const assert = require('assert');

const isWeekday = require('../isWeekday.js');

describe('isWeekday', function(){

    it('should check if it is a weekday', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should check if it is a weekday', function(){
        assert.equal(true, isWeekday('Monday'));
    });
});
