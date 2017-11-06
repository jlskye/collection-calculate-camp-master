'use strict';

function choose_multiples_of_three(collection) {

  //traverse array to find all 
  var result=[];
  for(var a of  collection){
    if(a%3==0){
      result.push(a);
    }
  }
  return result;}

module.exports = choose_multiples_of_three;
