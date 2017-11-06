'use strict';

function calculate_elements_sum(collection) {
  //get sum with reduce
  return collection.reduce(
    (pre,cur)=>(pre+cur)
  );
}

module.exports = calculate_elements_sum;

