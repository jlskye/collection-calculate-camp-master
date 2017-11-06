// 'use strict';

function collect_all_even(collection) {
  //traverse the arrary and find out all even
  var result=[];
  for( let a of collection){
    if(a%2==0){
      result.push(a);
    }
  }
  return result;
}

module.exports = collect_all_even;
