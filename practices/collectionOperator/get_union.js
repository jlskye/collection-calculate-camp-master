'use strict';

function get_union(collection_a, collection_b) {
//    ES6
//     return collection_a.concat(collection_b.filter(function (v) {
//         v=>collection_a.includes(v);
//     }))
//    ES5
    var union = collection_a.concat(collection_b.filter(function(v) {
        return collection_a.indexOf(v) === -1}));//filter return the values which aren't exist in a,and then join in a
    return union;
}

module.exports = get_union;

