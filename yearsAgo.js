'use strict'
 module.exports = function yearsAgo (myYear){

 var d = new Date();
  var n = d.getFullYear();
  var newYear = n - myYear;

  return newYear;
 // console.log(newYear);

}
