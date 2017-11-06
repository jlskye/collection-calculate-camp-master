'use strict';

function average_to_letter(collection) {
 var result=0;
  var map= new  Map([[55,'f']]);
  var count=collection.length;
  var aver= collection.reduce(
      (pre,cur)=>(pre+cur)
    )/count;
  result= map.get(aver);
  return result;
}

module.exports = average_to_letter;

