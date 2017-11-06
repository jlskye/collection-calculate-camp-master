'use strict';

function compute_chain_median(collection) {
  var median;
  collection.sort();
  var size=collection.size;
  if(size%2==0){
    let lowMiddle=Math.floor((size-1)/2);
    let highMiddle=Math.ceil((size-1)/2);
    median=(collection[lowMiddle]+collection[highMiddle])/2;
  }
  else {
    median=collection[(size-1)/2];

  }
  return median;
}

module.exports = compute_chain_median;
