function collect_same_elements(collection_a, object_b) {
  let result=[];
  for(let a of collection_a){

    if(object_b.value.includes(a)){
      result.push(a);
    }
  }


  return result;
}

module.exports = collect_same_elements;
