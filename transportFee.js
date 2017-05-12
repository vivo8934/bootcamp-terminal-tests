'use strict'
module.exports = function transportFee(shift){

 // var shift = prompt("Are You Working Morning or Afternoon or Night shift?");
  if(shift == 'morning')
  {
    return 'R20';
  }
   if (shift == 'afternoon')
  {
    return 'R10';
  }
  else if(shift == 'nightshift'){
    return 'free';
  }
}
