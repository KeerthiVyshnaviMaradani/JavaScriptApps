const arrowDemo = (a, b) => {
    console.log(a);
    console.log(b);
}
arrowDemo(10, 20);
//rest parameter
//assigning multiple values
const restParams = (a, b, ...c) => {
    console.log(a);
    console.log(b);
    console.log(c);
}
restParams(10, 20, 30, 40, 50);

// default parameters - only for last parameter
const addNum = (a, b = 20) => {
    console.log("Addition is", a + b);

}
addNum(10);
