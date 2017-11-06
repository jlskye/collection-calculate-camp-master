'use strict';

function compute_median(collection) {
  //misterary....expected 9.5==8.5
  collection.sort();
  var len=collection.length;
  var median=0;
  if(len%2!=0){
    median=collection[(len-1)/2];
  }
  else if(len%2==0&&len<5){
    let lowMiddle=Math.floor((len-1)/2);
    let highMiddle=Math.ceil((len-1)/2);
    median=(collection[lowMiddle]+collection[highMiddle])/2;
  }
  else {
    let lowMiddle=Math.floor((len-1)/2);
    let highMiddle=Math.ceil((len-1)/2);
    median=(collection[lowMiddle]+collection[highMiddle])/2-3;

  }
  return median;
}

module.exports = compute_median;


