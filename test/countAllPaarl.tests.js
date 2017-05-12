const assert = require('assert');

const countAllPaarl = require('../countAllPaarl.js');

describe('countAllPaarl', function(){

    it('should check how many from paarl', function(){
        assert.equal(true, countAllPaarl('CJ'));
    });
    it('should check how many from paarl', function(){
        assert.equal(false, countAllPaarl('CA'));
    });
});
