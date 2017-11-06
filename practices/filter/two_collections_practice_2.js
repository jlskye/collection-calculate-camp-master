'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //the difference of a and b
  //that is a not includes b's value adds b not includes a's value.
  return collection_a.filter(v=>!collection_b.includes(v)).concat(collection_b.filter(v=>!collection_a.includes(v)));
}

module.exports = choose_no_common_elements;
