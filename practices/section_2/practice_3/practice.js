function count_same_elements(collection) {
  // create a map to store the characters and it's count, and then traverse the map in order to separate the key and value.

  var  i=0;
  var Amap=new Map();
  var result=[];
  //put the result into a temporary map,eg:[(a,3),(e,7)....]

  for(let a of collection){

    var c='';
    if(a.includes('-')) {
      c='-';
    }
    else if (a.includes(':')) {
      c=':';
    }
    else if (a.includes('[')) {
      c='[]'
    }else {
      c='';
    }

    switch (c) {
      case c='-':

        // Amap.set(a.slice(0,1),i+=parseInt(a.slice(-1)));
        if(Amap.has(a.slice(0,1))){
          let j=Amap.get(a.slice(0,1));
          Amap.set(a.slice(0,1),j+parseInt(a.slice(-1)));
        }else {
          Amap.set(a.slice(0,1),parseInt(a.slice(-1)));
        }
        break;

      case c=':':
        Amap.set(a.slice(0,1),parseInt(a.slice(-1)));
        break;

      case c='[]':
        // Amap.set(a.slice(0,1),i+=parseInt(a.slice(2,-1)));
        if(Amap.has(a.slice(0,1))){
          let j=Amap.get(a.slice(0,1));
          Amap.set(a.slice(0,1),j+parseInt(a.slice(2,-1)));
        }else {
          Amap.set(a.slice(0,1),parseInt(a.slice(2,-1)));
        }
        break;
      case c='':
        if(Amap.has(a)){//check if the current character exists or not
          Amap.set(a,Amap.get(a)+1);
        }else {
          Amap.set(a,1);
          i=1;
        }
        break;
    }
  }
  var keys=[...Amap.keys()];//separate the key and value
  var values=[...Amap.values()];


  for(var j=0;j<Amap.size;j++){//transfer into object
    let o=new Object();
    o.name=keys[j];
    o.summary=values[j];
    result.push(o);
  }

  return result;}

module.exports = count_same_elements;
