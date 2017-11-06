function create_updated_collection(collection_a, object_b) {
  for(let b of object_b.value){
    for(var i=0;i<collection_a.length;i++){
      if(collection_a[i].key==b){
        collection_a[i].count--;
      }
    }
  }

  return collection_a;}

module.exports = create_updated_collection;
