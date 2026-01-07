// validation logic
function validate() {
    // get input values
    let uname = document.getElementById("usernamee").value;
    let pswd = document.getElementById("pswd").value;

    // regex: at least one lowercase and one uppercase
    let regexp = /(?=.*[a-z])(?=.*[A-Z])/;
    // username validation
    if (uname === "") {
        alert("Please enter username");
        return false;
    }

    // password empty check
    if (pswd === "") {
        alert("Please enter password");
        return false;
    }

    // password length validation
    if (pswd.length < 8 || pswd.length > 12) {
        alert("Password should be minimum 8 and maximum 12 characters");
        return false;
    }

    // password uppercase & lowercase check
    if (!regexp.test(pswd)) {
        alert("Password should contain both uppercase and lowercase letters");
        return false;
    }

    return true; // form submits only if all checks pass
}
