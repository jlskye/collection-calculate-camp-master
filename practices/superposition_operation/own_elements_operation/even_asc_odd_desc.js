'use strict';
var even_asc_odd_desc = function(collection){
//  use two array to store the even and odd separately.
  var even=[];
  var odd=[];
  for(let a of collection){
    if(a%2==0){
      even.push(a);
    }else {
      odd.push(a);
    }
  }
//  even is ascending, while odd is descending.
//  so use a function to sort numbers.
  even.sort(function (a,b) {
    return a-b;
  });
  odd.sort(function (a,b) {
    return a-b;
  }).reverse();
  return even.concat(odd);
};
module.exports = even_asc_odd_desc;
