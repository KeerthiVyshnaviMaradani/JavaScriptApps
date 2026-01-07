//loops in js
// for loop
for (let i = 1; i <= 10; i++) {
    console.log("i value is" + i);
}

// while loop
let j = 1;
while (j <= 10) {
    console.log("j value" + j);
    j += 1;
}

// do while loop
let k = 1;
do {
    console.log("K value is" + k)
    k++;
} while (k <= 10);

// loops in advanced javascript(ES - 6)
//for-in , for-of 
// These loops are used to get data from iterables(arrays,object , string).
let productNames = ["realme", "samsung", "LG", "Vivo"];
for (let names of productNames) {
    console.log("Names are" + names);
}
const emp_info = {
    e_id: 1001, e_name: "Keerthi", e_sal: 60000
}
for (let info in emp_info) {
    console.log(emp_info[info]);
}
// string using for-in
let collegeName = "Vignan";
for (let nm in collegeName) {
    console.log(collegeName[nm]);
}
// string using for-of
let cllgName = "Vignan";
for (let nm1 of cllgName) {
    console.log(nm1);
}







