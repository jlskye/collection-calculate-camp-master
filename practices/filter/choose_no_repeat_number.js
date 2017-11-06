'use strict';

function choose_no_repeat_number(collection) {

  // es6
  var temp_set=new Set(collection);
  var result=[];
  return result=Array.from(temp_set);


}

module.exports = choose_no_repeat_number;
