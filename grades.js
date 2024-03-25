 function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks.Enter a value between 0 and 100.";//Input marks must be between 0 and 100
    }
 }

 //Assign grades based on student's marks
 if (marks >= 80) {
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
 
 //Get user input for marks
 let marks = parseInt(prompt("Enter student's marks (0-100):"));

 //Caculate and display the grade
 let grade = calculateGrade(marks);
 console.log("Student's grade:", grade);