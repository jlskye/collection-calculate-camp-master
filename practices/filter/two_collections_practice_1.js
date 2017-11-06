'use strict';

function choose_common_elements(collection_a, collection_b) {

  //intersection of a and b
  return collection_a.filter(v=>collection_b.includes(v));
}

module.exports = choose_common_elements;
