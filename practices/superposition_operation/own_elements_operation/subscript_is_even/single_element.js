'use strict';
var single_element = function(collection){
  var  temp=[];
  var result=[];
  var count;
  for(var i=0;i<collection.length;i++){
    if(i%2!=0){
      temp.push(collection[i]);
    }
  }
  var count=temp.reduce(
    function (pre,cur) {
      if(cur in pre){
        pre[cur]++;
      }
      else {
        pre[cur]=1;
      }
      return pre;
    },{}
  );
  //traverse the vaule of map
  for(var a in count){
    if(count[a]==1){
      result.push(count[a]);
    }
  }
  return result;
};
module.exports = single_element;
