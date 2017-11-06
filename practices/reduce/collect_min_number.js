'use strict';

function collect_min_number(collection) {
  //use reduce() without initialvalue
  return collection.reduce(
    (pre,cur)=>Math.min(pre,cur)
  );
}

module.exports = collect_min_number;

