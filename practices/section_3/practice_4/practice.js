function create_updated_collection(collection_a, object_b) {
  // create a map to store the characters and it's count, and then traverse the map in order to separate the key and value.

  var  i=0;
  var Amap=new Map();
  var C=[];
  //put the result into a temporary map
  for(let a of collection_a){

    var c='';
    if(a.includes('-')) {
      c='-';
    }
    else if (a.includes(':')) {
      c=':';
    }
    else if (a.includes('[')) {
      c='[]';
    }
    else {
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
    o.key=keys[j];
    o.count=values[j];
    C.push(o);
  }

// three minus one
  for(let b of object_b.value){
    for(var i=0;i<C.length;i++){
      if(C[i].key==b&&Math.floor(C[i].count/3)>=1){
        C[i].count-=Math.floor(C[i].count/3);

      }
    }
  }
  return C;}

module.exports = create_updated_collection;
