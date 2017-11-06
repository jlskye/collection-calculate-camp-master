'use strict';

function get_letter_interval_2(number_a, number_b) {
    //generate a map to store the map relation between number and letter.
    var items=new Map([
        [20,'t'], [21,'u'],[22,'v'], [23,'w'], [24,'x'], [25,'y'],
        [26,'z'],[27,'aa'], [28,'ab'], [29,'ac'], [30,'ad'],[31,'ae'],
        [32,'af'], [33,'ag'], [34,'ah'], [35,'ai'],[36,'aj'],[37,'ak'],
        [38,'al'], [39,'am'], [40,'an'], [41,'ao'],[42,'ap'], [43,'aq'],
        [44,'ar'], [45,'as'],[46,'at'],[47,'au'], [48,'av'], [49,'aw'],
        [50,'ax'], [51,'ay'],[52,'az'], [53,'ba']
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

module.exports = get_letter_interval_2;

