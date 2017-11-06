function count_same_elements(collection) {
  // create a map to store the characters and it's count, and then traverse the map in order to separate the key and value.

  var  i=0;
  var Amap=new Map();
  var result=[];
  for(let a of collection){
    if(!a.includes('-')){
      if(Amap.has(a)){//check if the current character exists or not
        Amap.set(a,++i);
      }else {
        Amap.set(a,1);
        i=1;
      }
    }
    else {
      Amap.set(a.slice(0,1),parseInt(a.slice(-1)));


    }
  }
  var keys=[...Amap.keys()];//separate the key and value
  var values=[...Amap.values()];


  for(var j=0;j<Amap.size;j++){//transfer into object
    let o=new Object();
    o.key=keys[j];
    o.count=values[j];
    result.push(o);
  }

  return result;}

module.exports = count_same_elements;
