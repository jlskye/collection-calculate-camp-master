'use strict';

function average_uneven(collection) {
  var aver=0;
  var sum=0;
  for(let a of collection){
    if(a%2!=0){
      sum+=a;
    }
  }
  aver=(sum/collection.length)*2;
  return aver;
}

module.exports = average_uneven;
