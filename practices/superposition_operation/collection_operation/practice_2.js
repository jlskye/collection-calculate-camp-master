'use strict';

function hybrid_operation_to_uneven(collection) {
  //use a temp array to store result
  var result=[];
  for(let a of collection){
    if(a%2!=0){
      result.push(a*3+2);
    }
  }
  return result;

}

module.exports = hybrid_operation_to_uneven;

