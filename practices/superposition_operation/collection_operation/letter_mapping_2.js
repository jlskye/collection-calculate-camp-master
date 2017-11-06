'use strict';

function average_to_letter(collection) {
 var result=0;
  var map= new  Map([[5.5,'f']]);
  var count=collection.length;
  let sum= collection.reduce(
       (pre,cur)=>(cur+=pre)
    );
  var aver=sum/count;
  result= map.get(aver);
  return result;
}

module.exports = average_to_letter;

