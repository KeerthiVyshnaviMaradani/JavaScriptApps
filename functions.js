//functions in js
function showMessage() {
    console.log("Welcome to js functions");
}
showMessage();
//function with parameters
function sumNumbers(a, b) { //a,b are parameters
    console.log("sum is" + (a + b));
}
sumNumbers(2, 3); // arguments

// function with return value
// with the resultant output there is any future use we return value
function mulNum(c, d) {
    return c * d;
}
let output = mulNum(2, 3);
console.log("Mul is" + output);

//new function syntax in ES-6
// arrow function
const arrowDemo = () => {
    console.log("arrow function Demo");
}
arrowDemo();
// arrow function with parameters
const addNums = (a, b) => {
    console.log("sum of number" + (a + b));
}
addNums(10, 20);

// in a simple way- for only one statement
const addNums1 = (a, b) => a + b;
console.log(addNums1(10, 20));

// arrow function with return a value
const mulNum1 = (a, b) => a * b;
let res = mulNum1(5, 6);
console.log(res);
