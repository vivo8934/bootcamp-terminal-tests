const assert = require('assert');

const regCheck = require('../regCheck.js');

describe('regCheck', function(){

    it('should check same regNumbers', function(){
        assert.equal(false, regCheck('GF 90 CF', 'CA'));
    });
    it('should check same regNumbers', function(){
        // this test will fail - can you fix it?
        assert.equal(true,  regCheck('DV 23 NB GP', 'GP'));
    });
});
