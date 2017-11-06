'use strict';
var is_exist_element = function(collection,element){
  //use a tmep array to store even subscript elements.
  var temp=[];
  for(var i=0;i<collection.length;i++){
    if(i%2==0){
      temp.push(collection[i]);
    }
  }
  //judge if element is exist or not.
  if(temp.includes(element)){
    return true;
  }else {
    return false;
  }
};
module.exports = is_exist_element;
