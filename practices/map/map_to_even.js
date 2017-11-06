'use strict';
function map_to_even(collection){
  
  //the function act as a parameter for the map method.
  //the origin array isn't change, still is [1,2,3,4,5]
  //but map method can return a new array which is operated by the map method.
  var result=collection.map(function (e) {
    return e*2;
  })
  return result;
  // return [2,4,6,8,10];
}
module.exports = map_to_even;
