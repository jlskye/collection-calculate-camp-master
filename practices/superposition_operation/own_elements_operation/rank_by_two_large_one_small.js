'use strict';
function rank_by_two_large_one_small(collection){
//first of all. sort the collection: wo can get [1, 2, 3, 4, 6, 8, 9, 10]
//  rank by two large one ,observe the subscript,extract:1,4,7
//  so every three number,swap the middle with it's previous number
//  and then swap the middle with it's next number.
//  eg.1,2,3
//   =>2,1,3
//   =>2,3,1
  var temp=0;
  collection.sort((a,b)=>a-b);
  for(var i=0;i<collection.length-3;i++){
    if(i%3==1){
      temp=collection[i];
      collection[i]=collection[i-1];
      collection[i-1]=temp;
      temp=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=temp;

    }
  }
  return collection;}
module.exports = rank_by_two_large_one_small;
