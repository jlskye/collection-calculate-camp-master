'use strict';
var number_map_to_word = function(collection){
  var map=new Map([
    [1,'a'],
    [2,'b'],
    [3,'c'],
    [4,'d'],
    [5,'e']
  ]);
  return collection.map(function (e) {
    return map.get(e);
  })
  // return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
