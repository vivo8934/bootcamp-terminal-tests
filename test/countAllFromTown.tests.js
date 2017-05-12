const assert = require('assert');

const countAllFromTown = require('../countAllFromTown.js');

describe('countAllFromTown', function(){

  it('should check AllFromTown', function(){
      assert.deepEqual (1, countAllFromTown('CL 124,CY 567,CL 345', 'CY'));
  });
  it('should check AllFromTown', function(){
      assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
  });
});
