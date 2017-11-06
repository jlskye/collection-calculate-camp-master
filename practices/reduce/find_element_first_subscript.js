'use strict';

function calculate_elements_sum(collection, element) {
  //I use findIndex to return the specified index
  return collection.findIndex(
     v=>(v==element)
  )
}

module.exports = calculate_elements_sum;

