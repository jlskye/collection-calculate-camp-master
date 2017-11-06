'use strict';

function calculate_elements_sum(collection, element) {
  //I used a tmep array to store all the subscript which match that element.
  var temp=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]==element){
      temp.push(i);
    }
  }
  return temp.pop();
}

module.exports = calculate_elements_sum;
