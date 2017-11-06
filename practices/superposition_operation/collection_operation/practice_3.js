'use strict';

function hybrid_operation_to_uneven(collection) {

  var result=0;
  for(let a of collection){
    if(a%2!=0){
      result+=a*3+5;
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

