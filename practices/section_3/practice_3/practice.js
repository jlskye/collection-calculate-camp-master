function create_updated_collection(collection_a, object_b) {
  // create a map to store the characters and it's count, and then traverse the map in order to separate the key and value.

  var  i=0;
  var Amap=new Map();
  var C=[];
  for(let a of collection_a){
    if(Amap.has(a)){//check if the current character exists or not
      Amap.set(a,++i);
    }else {
      Amap.set(a,1);
      i=1;
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
