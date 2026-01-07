//apply method
const studentInfo = {
    studentDetails: function (qualification, branch) {
        return this.rollno + " " + this.studentName + " " + branch + " " + qualification;
    }
}
const student = {
    rollno: "5C#",
    studentName: "keerthi",
}
console.log(studentInfo.studentDetails.apply(student, ["B.tech", "Cse"]))
