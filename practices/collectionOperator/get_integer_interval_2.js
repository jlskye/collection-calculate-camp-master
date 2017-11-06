'use strict';

function get_integer_interval_2(number_a, number_b) {
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
    else if(diff==0&&number_b%2==0){
        test=3;
    }
    else{
        test=4;
    }

    switch (test){
        case 1:
            for(var i=number_a;i<=number_b;i++){
                if(i%2==0){
                    result.push(i);
                }
            }
            break;
        case 2:
            for(var j=number_a;j>=number_b;j--){
                if(j%2==0){
                    result.push(j);
                }
            }
            break;
        case 3:
            result.push(number_b);
            break;
        case 4:
            result=[];
            break;

    }
    return result;
}

module.exports = get_integer_interval_2;
