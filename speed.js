 
 function calculateDemeritPoints(speedlimit, speed) {
    if (speed <= 0){
        return "Invalid speed,enter a positive value.";  //Speed must be a positive number to be a valid input
    }
 }

 //Calculate the difference between speed and speedlimit for those above the speed limit
 const speedDifference = speed - speedLimit;

 //Calculate demerit points,round down to the nearest whole number
 const demeritPoints = Math.floor(speedDiffernce / 5);

 //License suspension
 if (demeritPoints > 12) {
    return "License suspended";
 }

 //Display the result
 if (demeritPoints === 0) {
    return "Ok"
 }else {
    return 'Points: ${demeritpoints}';
 }  

 //Set the speed limit
 const speedLimit = 70;

 //Get user input for speed
 let speed = parseInt(prompt("Enter car's speed (km/h):"));

 //Calculate and display demerit points
 const result = calculateDemeritPoints(speedLimit, speed);
 console.log(result);