//variables in js
var p_name = "Samsung";
let p_id = 3001;
const price = 50000;
// ES-6 new keywords
//drawbacks of var
// var redeclaration with same variable name
var p_name = "Lg";
console.log(p_name);
// let p_id = 4001;
// console.log(p_id);
for (var i = 1; i <= 10; i++) { //use var inplace of let 
    console.log("inner i value" + i);
}
console.log("outer i value" + i);

const pancardno = "DCME12345G";
console.log(pancardno);
// pancardno = "fvjnvfu123";
// console.log(pancardno);

