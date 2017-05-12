const assert = require('assert');

const countRegNumber = require('../countRegNumber.js');

describe('countRegNumber', function(){

    it('should count alll registration NUmbers', function(){
        assert.equal(2, countRegNumber("CA 182736,CY 523519"));
    });
    it('should count alll registration NUmbers', function(){
        // this test will fail - can you fix it?
        assert.equal(3, countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });
});

