//Regex Expressions
var courseNameRegEx = /^[A-Za-z0-9_ ]*$/;
var lessonsRegEx = /^([0-9]|[1-5][0-9]|(6[0]))$/;

//Check validity 
var courseNameValid = false;
var lessonsValid = false;

//Validate Form 
function validateForm() {

//Validate Course Name
const courseName = document.getElementById("inputCourseName").value;
if(courseName === "" || courseName == null) {
    alert("Please enter a Course Name.");
} else if (courseNameRegEx.test(courseName) == false) {
    alert("Invalid Course Name. Please enter a course name consisting of Upper and Lowercase letters and numbers.");
} else {
    courseNameValid = true;
}

//Validate Number of Lessons
const lessons = document.getElementById("inputLessons").value;
if(lessons === "" || lessons == null) {
    alert("Please enter a lesson number.");
} else if(lessonsRegEx.test(lessons) == false) {
    alert("Invalid lessons input. Please enter a number in the range 20-60");
} else {
    lessonsValid = true;
}

if(courseNameValid == true && lessonsValid == true) {
    window.location.href="dashboard.html";
  }

}


