'use strict';

function even_to_letter(collection) {
  //use a map to store the mapping relationship
  var map=new Map([[2,'b'],[4,'d'],[6,'f'],[8,'h'],[10,'j']]);
  var result=[];
  for(let a of collection){
    if(a%2==0){
      result.push(map.get(a));

    }
  }
  return result;
}

module.exports = even_to_letter;
