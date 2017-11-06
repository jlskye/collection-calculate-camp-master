'use strict';

function get_integer_interval(number_a, number_b) {
    var diff=number_b-number_a;
    var result=[];
    //compare number_a to number_b, and calculate their difference.
    
    if(diff>0){
      diff=1;
    }
  else if(diff<0){
      diff=2;
    }
  else{
      diff=3;
    }

  switch (diff){
    case 1:
          for(var i=number_a;i<=number_b;i++){
              result.push(i);
          }
          break;
    case 2:
      for(var i=number_a;i>=number_b;i--){
          result.push(i);
      }
      break;
    case 3:
          result.push(number_b);
          break;
  }
  return result;
}

module.exports = get_integer_interval;

