//this keyword - which is used to represent current object
const empInfo = {
    firstName: "Keerthi",
    lastName: "Maradani",
    empDetails: function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(empInfo.empDetails(

));

