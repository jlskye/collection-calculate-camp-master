'use strict';

function get_letter_interval(number_a, number_b) {
     //generate a map to store the map relation between number and letter.
     var items=new Map([
        [1,'a'],
        [2,'b'],
        [3,'c'],
        [4,'d'],
        [5,'e']
    ]);
    var diff=number_b-number_a;
    var test;
    var result=[];
    //compare number_a to number_b, and calculate their difference.
    if(diff>0){
        test=1;
    }
    else if(diff<0){
        test=2;
    }
    else{
        test=3;
    }
    switch (test){
        case 1:
            for(var i=number_a;i<=number_b;i++){
                result.push(items.get(i));
            }
            break;
        case 2:
            for(var i=number_a;i>=number_b;i--){
                result.push(items.get(i));
            }
            break;
        case 3:
            result.push(items.get(number_a));
            break;
    }
    return result;

}

module.exports = get_letter_interval;
