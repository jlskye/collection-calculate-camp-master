'use strict';
var map_to_four_multiples_add_one = function(collection){
  //the function act as a parameter for the map method.
  //the origin array isn't change, still is [1,2,3,4,5]
  //but map method can return a new array which is operated by the map method.
  var result=collection.map(function (e) {
    return e*4+1;
  })
  return result;
  // return [2,4,6,8,10];
  // return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;
