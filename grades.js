 
 //Prompt the user to enter the student's marks
 const marks = prompt("Please enter the student's marks(between 0 and 100):");

 //Validate user's input
 function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks.Enter a value between 0 and 100.";//Input marks must be between 0 and 100
    }
 }

 //Assign grades based on student's marks
 let grade;
 if (marks >79) {
    grade = "A";
 } else if (marks >= 60){
    grade = "B";
 }else if (marks >= 50) {
    grade = "C"; 
 } else if (marks >= 40) {
    grade = "D";
 } else {
    grade = "E";
 }
 
  //Caculate and display the grade
 console.log (${grade});
