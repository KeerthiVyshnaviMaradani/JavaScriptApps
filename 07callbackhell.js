const stuInfo = () => {
    console.log("student details are:");
    setTimeout(() => {
        let rollno = [1, 2, 3, 4, 5];
        console.log(rollno);
        setTimeout((roll_number) => {
            const data = {
                sname: "Keerthi",
                qualification: "B.Tech"
            }
            console.log(`student name is ${data.sname} and qualification is ${data.qualification}and roll number is ${roll_number}`);
        }, 2000, rollno[1]);

    }, 2000)
};
stuInfo();