function create_updated_collection(collection_a, object_b) {
  for(let b of object_b.value){
    for(var i=0;i<collection_a.length;i++){
      if(collection_a[i].key==b&&Math.floor(collection_a[i].count/3)>=1){//minus 1 when upto three
        // if(Math.floor(collectionA[i].count/3)>=1){
        collection_a[i].count-=Math.floor(collection_a[i].count/3);

        // }

      }
    }
  }

  return collection_a;}

module.exports = create_updated_collection;
