const assert = require('assert');

const totalPhoneBill = require('../totalPhoneBill.js');

describe('totalPhoneBill', function(){

    it('should calculate total bill usage', function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
        assert.equal(totalPhoneBill('call, call'), 'R5.50');
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
    });
    it('should calculate total bill usage', function(){
        assert.equal(totalPhoneBill(''), 'R0.00');
    });
});
