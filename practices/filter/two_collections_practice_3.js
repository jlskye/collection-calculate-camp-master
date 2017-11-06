'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  var result=[];
  for(let j of collection_a){
    for(let i of collection_b){
      if(j%i==0){
        result.push(j);
      }
    }
  }
  return result;

}

module.exports = choose_divisible_integer;
