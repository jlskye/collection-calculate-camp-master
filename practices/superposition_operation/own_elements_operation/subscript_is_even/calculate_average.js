'use strict';
var calculate_average = function(collection){
  //subscript is even
  var count=0;
  var sum=0;
  for(var i=0;i<collection.length;i++){
    if(i%2!=0){
      sum+=collection[i];
      count++;
    }
  }
  return sum/count;
};
module.exports = calculate_average;
