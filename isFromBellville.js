'use strict'
module.exports = function isFromBellville(carReg){


  var regis = carReg.startsWith('CY')
  console.log(regis);

  return regis;

}
