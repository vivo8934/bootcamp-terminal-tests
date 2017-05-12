'use strict'
module.exports = function countAllFromTown (regNumbers, Num){

  var reg = regNumbers.split(',');

  var count = 0;

  for(var i = 0; i< reg.length; i++)
  {
    var a = reg[i].trim();
    if(a.startsWith(Num))
    {
      count ++;
    }

  }
  return count;

}
