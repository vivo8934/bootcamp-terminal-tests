'use strict'
 module.exports = function countAllPaarl (Mbex){
  var aPaarl = Mbex.split(', ');
  var ePaarl = [];

  for (var i = 0; i< aPaarl.length;i++)
  {
    if (aPaarl[i].startsWith('CJ') === true){
      ePaarl.push(aPaarl[i]);
      console.log(aPaarl[i]);
    }
  }
  return ePaarl.length;
}
