'use strict';

function choose_even(collection) {

  //traverse array to find all even
  var result=[];
  for(let a of  collection){
    if(a%2==0){
      result.push(a);
    }
  }
  return result;
}

module.exports = choose_even;
