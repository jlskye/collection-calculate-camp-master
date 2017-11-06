'use strict';

function spilt_to_zero(number, interval) {
  //use a loop to store result in temp array,then transform the type to number
  /*--------------------------------------------------------------------------
   for(i=0;i<this.all.length;i++){
   vTotal+=Number(this.all[i].Value);
   }
   we have to use that *Number* method for in(vTotal+=Number), [+/-] acts as join
   behavior instead of arithmatic behavior.
  --------------------------------------------------------------------------*/
  var temp=[];
  // var len=temp.length;
  if(interval==0.2){
    temp.push(number);
    while (temp[temp.length-1]>0){
      number-=(interval);

      temp.push(Number(number.toFixed(1)));
    }
  }
  else {
    temp.push(number);
    while (temp[temp.length-1]>0){
      number-=(interval);
      temp.push(Number(number.toFixed(1)));
    }
  }
  return temp;
}

module.exports = spilt_to_zero;
