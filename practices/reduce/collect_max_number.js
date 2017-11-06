'use strict';

function collect_max_number(collection) {
  //use reduce() without initialvalue
  return collection.reduce(
    (pre,cur)=>Math.max(pre,cur)
  );
}

module.exports = collect_max_number;
