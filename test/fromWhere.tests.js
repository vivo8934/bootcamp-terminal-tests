const assert = require('assert');

const fromWhere = require('../fromWhere.js');

describe('fromWhere', function(){

    it('should check how much will be used', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('should check how much will be used', function(){
        assert.equal('Cape Town',  fromWhere('CA'));
    });
});
