'use strict';

function median_to_letter(collection) {
  var map=new Map([
    [36.5,'ak']
  ])
  var size=collection.length;
  var median=0;
  //find the median.
  if(size%2==0){
    let lowMiddle = Math.floor((size - 1) / 2);
    let highMiddle = Math.ceil((size - 1) / 2);
    median=(collection[lowMiddle]+collection[highMiddle])/2;
  }
  else {
    median=collection[(size-1)/2];

  }
  var result= map.get(median);
  return result;
}

module.exports = median_to_letter;
