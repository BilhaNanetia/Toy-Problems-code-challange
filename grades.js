 function calculateGrade (marks) {

 //Assign grades based on student's marks
 if (marks >79) {
    return "A";
 } else if (marks >= 60){
    return "B";
 }else if (marks >= 50) {
    return "C"; 
 } else if (marks >= 40) {
    return "D";
 } else {
    return "E";
 }
}
 
  //Get user input for student marks
  let marks = parseFloat(prompt("Enter student's marks (between 0 and 100):"));
  
  //Validate the user's input
  if (isNaN(marks) ||marks < 0 || marks > 100) {
   return ('Invalid input.Marks are between 0 and 100');
  } else {
   //calculate and display the grade
   const grade = calculateGrade(marks);
   return Grade: ${grade};
  }
