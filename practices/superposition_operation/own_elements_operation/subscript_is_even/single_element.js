'use strict';
var single_element = function(collection){
  var  temp=[];
  var result=[];
  var count;
  var map=new Map();
  for(var i=0;i<collection.length;i++){
    if(i%2!=0){
      temp.push(collection[i]);
    }
  }

  for(let a of temp){
    if(map.has(a)){
      map.set(a,map.get(a)+1);
    }
    else {
      map.set(a,1);
    }
  }
  let map2=new Map([...map].filter(([k,v])=>v==1));
  for(let a of map2.keys()){
    result.push(a);
  }
  return result;
};
module.exports = single_element;
