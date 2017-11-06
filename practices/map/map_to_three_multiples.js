'use strict';
var map_to_three_multiples = function(collections){
  //the function act as a parameter for the map method.
  //the origin array isn't change, still is [1,2,3,4,5]
  //but map method can return a new array which is operated by the map method.
  var result=collections.map(function (e) {
    return e*3;
  })
  return result;
  // return [2,4,6,8,10];
  // return [3,9,15,12,27];
};

module.exports = map_to_three_multiples;
