// Write a function to calculate simple interest based on the principle amount


function calculateSimpleInterest(principal,rateOfInterest,time){
    return (principal + (principal * rateOfInterest * time));
}

console.log(calculateSimpleInterest(5000,3,5));