 
 //The function speedDetector calculates upto 12 demerit points when the speed limit increaments by 5kph.
function speedDetector(speed) {
   if (speed > 130) {
     return "License suspended";
    } else if (speed >= 125) {
     return '12 points';
    } else if (speed >= 120) {
     return '11 points';
    } else if (speed >= 115) {
     return '10 points';
    } else if (speed >= 110) {
     return '9 points';
    } else if (speed >= 105) {
      return '8 points';
    } else if (speed >= 100) {
      return '7 points';
    } else if (speed >= 95) {
      return '6 points';
    } else if (speed >= 90) {
      return '5 points';
    } else if (speed >= 85) {
      return '4 points';
    } else if (speed >= 80) {
      return '3 points';
    } else if (speed >= 75) {
      return '2 points';
    } else if (speed >= 70) {
      return '1 point';
    } else {
      return "ok";
    }
  }
  //speedDemerit function takes in the user input
  function speedDemerit () {
   const speed = parseFloat(prompt('Input speed in Km/h:'));
 
 // considering letters and negative numbers.
   if (isNaN(speed) || speed < 0) {
     return 'Please enter a valid input';
   }
 //output user demerit points
   const demeritPoints = speedDetector(speed);
   return `Your points are: ${demeritPoints}`;
 }
 //Execute the speedDemerit function
 const results = speedDemerit ();
 console.log(results);