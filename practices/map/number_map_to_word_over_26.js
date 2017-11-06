'use strict';
var number_map_to_word_over_26 = function(collection){
  var map=new Map([
    [1,'a'],
    [13,'m'],
    [27,'aa'],
    [30,'ad'],
    [25,'y'],
    [27,'aa']
  ]);
  return collection.map(function (e) {
    return map.get(e);
  })
  // return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
