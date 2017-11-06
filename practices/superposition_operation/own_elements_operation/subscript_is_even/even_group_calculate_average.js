'use strict';
var even_group_calculate_average = function(collection){
  var result=[];
  var even=[];
  var list_1=[];
  var list_2=[];
  var list_3=[];
  for(var i=0;i<collection.length;i++){
    if(i%2!=0){
      if(collection[i]%2==0){
        even.push(collection[i]);
      }
    }
    // else
    // {
    //   //'首先选出所有第偶数个元素，当不含有偶数时(所有的都不是偶数)'
    //   return result=[0];
    // }
  }
  if(even.length===0){
    return result=[0];
  }
  for(let a of even){
    var count=(a.toString()).length;
    switch(count){
      case 1:
        list_1.push(a);
        break;
      case 2:
        list_2.push(a);
        break;
      case 3:
        list_3.push(a);
        break;
    }

  }
  if(list_1.length===0&&list_2.length===0&&list_3.length>0){
    let aver=(list_3.reduce((pre,cur)=>cur+=pre))/list_3.length;
     result.push(aver);
  }else {
    let aver1=(list_1.reduce((pre,cur)=>cur+=pre))/list_1.length;
    let aver2=(list_2.reduce((pre,cur)=>cur+=pre))/list_2.length;
    let aver3=(list_3.reduce((pre,cur)=>cur+=pre))/list_3.length;
     result.push(aver1);
     result.push(aver2);
     result.push(aver3);

  }
  return result;
};
module.exports = even_group_calculate_average;
