'use strict';

function compute_average(collection) {
  //calculate the sum first,
  //the get the average with the count
  var count=collection.length;
  return collection.reduce(
    (pre,cur)=>(pre+cur)
  )/count;
}

module.exports = compute_average;

