const assert = require('assert');

const yearsAgo = require('../yearsAgo.js');

describe('yearsAgo', function(){

    it('should check how many yearsAgo', function(){
        assert.equal(26, yearsAgo(1991));
    });
    it('should check how many yearsAgo', function(){
        assert.equal(22, yearsAgo(1995));
    });
});
