'use strict';

function find_last_even(collection) {
  //I used a tmep array to store all the even which match that element.
  var temp=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      temp.push(collection[i]);
    }
  }
  return temp.pop();}

module.exports = find_last_even;
