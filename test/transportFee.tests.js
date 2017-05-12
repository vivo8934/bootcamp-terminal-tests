const assert = require('assert');

const transportFee = require('../transportFee.js');

describe('transportFee', function(){

    it('should check how much will be used', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should check how much will be used', function(){
        assert.equal('R10',  transportFee('afternoon'));
    });
    it('should check how much will be used', function(){
        assert.equal('free',  transportFee('nightshift'));
    });
});
