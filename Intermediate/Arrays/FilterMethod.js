// Remove Element from Array with Certain Condition using filter() Method


function isPositive(value){
    return value > 0;
}
function func(){
    let array = [1,5,2,8,11,-13,45,54,78,-1].filter(isPositive);
    console.log(array);
}
func();