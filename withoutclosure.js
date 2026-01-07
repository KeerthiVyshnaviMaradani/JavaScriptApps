//without closre
// global variable
let counter = 1

const counterResult = () => {
    // local variable
    let counter = 0
    counter += 1;
    return counter;

}
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());

