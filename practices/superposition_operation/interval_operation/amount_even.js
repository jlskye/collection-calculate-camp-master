'use strict';

function amount_even(collection) {
  var sum=0;
  for(let a of collection){
    if(a%2==0){
      sum=(sum+a);
    }
  }
  return sum;
}

module.exports = amount_even;
