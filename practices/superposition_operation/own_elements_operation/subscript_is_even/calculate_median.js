'use strict';
var calculate_median = function(collection){
  var temp1=[];
  var result=0;
  //store all even in the temp array
  for(var i=0;i<collection.length;i++){
    if(i%2!=0){
      temp1.push(collection[i]);
    }
  }
  temp1.sort();
  if(temp1.length%2!=0){
    result=temp1[(temp1.length-1)/2];
  }else {
    var lowMedian=temp1[(temp1.length-2)/2];
    var highMedian=temp1[(temp1.length)/2];
    result=(lowMedian+highMedian)/2
  }
  return result;
};
module.exports = calculate_median;
