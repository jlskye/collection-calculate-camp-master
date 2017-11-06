function collect_same_elements(collection_a, collection_b) {
  let result=[];
  for(let a of collection_a){
    if(collection_b.includes(a)){
      result.push(a);
    }
  }
  return result;}

module.exports = collect_same_elements;
