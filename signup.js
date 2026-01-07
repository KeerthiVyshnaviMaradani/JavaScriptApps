function validateForm() {

    // get values from input fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cpassword").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let qualification = document.getElementById("qualification").value;

    // gender selection
    let genderSelected = false;
    let genders = document.getElementsByName("gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderSelected = true;
        }
    }

    // check username
    if (username == "") {
        alert("Please enter username");
        return false;
    }

    // check password empty
    if (password == "") {
        alert("Please enter password");
        return false;
    }

    // check capital and small letters
    let hasUpper = false;
    let hasLower = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = true;
        }

        if (ch >= 'a' && ch <= 'z') {
            hasLower = true;
        }
    }

    if (!hasUpper || !hasLower) {
        alert("Password must contain at least one CAPITAL letter and one small letter");
        return false;
    }

    // confirm password
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // gender check
    if (!genderSelected) {
        alert("Please select gender");
        return false;
    }

    // mobile number check
    if (mobile.length != 10) {
        alert("Mobile number must be 10 digits");
        return false;
    }

    // DOB check
    if (dob == "") {
        alert("Please select Date of Birth");
        return false;
    }

    // qualification check
    if (qualification == "") {
        alert("Please select qualification");
        return false;
    }

    // final confirmation
    return confirm("Are you sure you want to submit the form?");
}

