'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var temp_object={
    1:0,
    2:0,
    3:0,
    4:0
  }
  for(let a of collection){
    if(a==1){ ++temp_object[1];}
    else if(a==2){++temp_object['2'];}
    else if(a==3){++temp_object['3'];}
    else {++temp_object['4'];}
  }
  return temp_object;
}

module.exports = grouping_count;
