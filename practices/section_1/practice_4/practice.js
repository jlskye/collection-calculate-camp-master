function collect_same_elements(collection_a, object_b) {
  let result=[];
  for(var i=0;i<collection_a.length;i++){
    if(object_b.value.includes(collection_a[i].key)){
      result.push(collection_a[i].key);
    }

  }

  return result;
}

module.exports = collect_same_elements;
