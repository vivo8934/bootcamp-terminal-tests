'use strict'
module.exports = function findItemsOver20 (myOver20){

  var outcome = [];

for(var inList in myOver20){

  if (myOver20[inList].qty > 20)
  {
    outcome.push(myOver20[inList]);
  }
}
  return outcome;
}
