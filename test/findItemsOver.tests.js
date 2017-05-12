const assert = require('assert');

const findItemsOver = require('../findItemsOver.js');

describe('findItemsOver', function(){

  it('should check All objects', function(){
      assert.deepEqual([{name : 'pears', qty : 37}],findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},], 30));


  });
});
