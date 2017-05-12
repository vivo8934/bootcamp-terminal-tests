const assert = require('assert');

const isFromBellville = require('../isFromBellville.js');

describe('isFromBellville function', function(){

  it('should check is from bellville', function(){
      assert.equal(true, isFromBellville('CY'));
  });
  it('should check is from bellville', function(){
      assert.equal(false, isFromBellville('CF'));
  });
});
