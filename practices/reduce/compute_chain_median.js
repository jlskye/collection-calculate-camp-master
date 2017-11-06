'use strict';

function compute_chain_median(collection) {

  //separate the number into a array.
  var temp1=[];
  var temp2=[];
  var median=0;
  var size=0;
  temp1=collection.split("->");
  for(let a of temp1){
    temp2.push(parseInt(a));
  }
  size=temp2.length;
  temp2.sort(function (a,b) {
    return a-b;
  });
  //find the median.
  if(size%2==0){
    let lowMiddle = Math.floor((size - 1) / 2);
    let highMiddle = Math.ceil((size - 1) / 2);
    median=(temp2[lowMiddle]+temp2[highMiddle])/2;
  }
  else {
    median=temp2[(size-1)/2];

  }
  return median;
}

module.exports = compute_chain_median;
