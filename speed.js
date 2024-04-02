 //lets the user input the speed
 let speed = prompt("Enter speed:");


 //Variables
 const speedLimit = 70;
 const pointsPer5kmph = 1;
 const demeritLimit = 12;


 //Function to check speed and calculate points to be deducted if driver goes beyond 70kmph per 5kmph
 function checkSpeed () {

  if (speed <= speedLimit) {
    console.log ("Ok");
    return 0;
  }

  else {
    const kmphAboveLimit = speed - speedLimit;
    const pointsDeducted = Math.floor(kmphAboveLimit / 5) * pointsPer5kmph;
    console.log('Points: ${pointsDeducted}');

    if (pointsDeducted >= demeritLimit) {
      console.log("License suspended");
    }
    return pointsDeducted;

  }
 }
 checkSpeed();