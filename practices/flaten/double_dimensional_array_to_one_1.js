'use strict';

function double_to_one(collection) {

  //reverse flatten function is used
  //reverse the ...(extend)function until the member of current array isn't an array anymore.
  //so i used the Array.isArray method to test.
  var flatten=collection=>[].concat(...collection);
  return flatten(collection.map(x=>Array.isArray(x)?double_to_one(x):x));
}

module.exports = double_to_one;
