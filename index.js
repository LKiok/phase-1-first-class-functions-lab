// Code your solution in this file!
let returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0,2);
};

let returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 let createFareMultiplier = function(num1) {
    return function(fare){
        return fare*num1;
    }
}

let fareMultiplier = createFareMultiplier();
let fareDoubler = (fareMultiplier, response)=>{
    response = fareMultiplier*2
    return response;
}

let fareTripler = (fareMultiplier, response)=>{
    response = fareMultiplier*3
    return response;
}

let selectDifferentDrivers = (drivers, selectingDrivers) =>{
    return selectingDrivers(drivers)
}