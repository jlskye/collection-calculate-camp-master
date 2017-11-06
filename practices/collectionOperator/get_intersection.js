'use strict';

function get_intersection(collection_a, collection_b) {
//    ES6
//     var result=[];
//     result=collection_a.filter(v=>collection_b.includes(v));
//     return result;

//    ES5
    var result = collection_b.filter(function(v) {
        return collection_a.indexOf(v) > -1//filter return values exist in a.
    });
    return result;
}

module.exports = get_intersection;
