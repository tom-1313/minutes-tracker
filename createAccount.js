

    //Regex Expressions
    var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var passwordConfirmRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    //Check validity 
    var emailValid = false;
    var passwordValid = false;
    var passwordConfirmValid = false;

    //Validate Form 
    function validateForm() {

      //Validate Email
      const email = document.getElementById("inputEmail").value;
      if(email === "" || email == null) {
          alert("Please enter a email.");
      } else if (emailRegEx.test(email) == false) {
          alert("Invalid email. Please use follow the example template: (example@quinnipiac/qu.edu)");
      } else if (!/^[^@\s]+@quinnipiac.edu$/i.test(email) && !/^[^@\s]+@qu.edu$/i.test(email)) {
          alert("Invalid email. Please enter your Quinnipiac email.")
      } else {
          emailValid = true;
      }

      //Validate Password
      const password = document.getElementById("inputPassword").value;
      if(password === "" || password == null) {
          alert("Please enter a password.");
      } else if(passwordRegEx.test(password) == false) {
          alert("Invalid password. Please use Upper and Lowercase letters, numbers and at least one special character.");
      } else {
          passwordValid = true;
      }

      //Validate Confirm Password
      const passwordConfirm = document.getElementById("inputConfirmPassword").value;
      if(passwordConfirm === "" || passwordConfirm == null) {
          alert("Please enter a confirm password.");
      } else if(passwordConfirmRegEx.test(passwordConfirm) == false) {
          alert("Invalid confirm password. Please use Upper and Lowercase letters, numbers and at least one special character. Ensure your input matches your password.");
      } else {
          passwordConfirmValid = true;
      }
      
      if(emailValid == true && passwordValid == true && passwordConfirmValid == true) {
        window.location.href="dashboard.html";
      }
    }
    
//CheckBox Dropdown Backend
var expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//Display Slected Courses Backend
var selectedCourses = [];
function display(course) {
  if (document.getElementById(course).checked == true){
    var selected = document.getElementById(course).parentElement.textContent;
    selectedCourses.push(selected);
    document.getElementById("selectedCourses").innerHTML = selectedCourses;
  }
  if (document.getElementById(course).checked == false) {
    var selected = document.getElementById(course).parentElement.textContent;
    var index = selectedCourses.indexOf(selected);
    selectedCourses.splice(index, 1);
    document.getElementById("selectedCourses").innerHTML = selectedCourses;
  }
}
