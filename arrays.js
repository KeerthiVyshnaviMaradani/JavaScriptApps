//arrays in js
//store dissimilar elements
const demoArray = [10, 20, "Keerthi", "Pravalli"];
console.log(demoArray);
// literal syntax(one way of creating arrays)
const p_names = ["Realme", "Lg", "Samsung", "vivo"];
console.log(p_names);
// object syntax(another way of creating array)
let prices = new Array(20000, 40000, 50000, 30000);
// to get values
console.log(p_names[2]);
for (let names of p_names) {
    console.log("Names are" + names);
}
// for-each method //if we implement one function inside another function is called call back function
let products = p_names.forEach((val) => {
    console.log(val);

})
// to add elements in to arr- push, unshift, splice
p_names.push("One-plus");
console.log(p_names);
p_names.unshift("Poco");
console.log(p_names);
p_names.splice(2, 0, "Moto", "oppo");
console.log(p_names);
// to remove -pop, shift, splice
//pop method
p_names.pop();
console.log(p_names);
// shift method
p_names.shift();
console.log(p_names);
//splice method
p_names.splice(4, 1);
console.log(p_names);
//delete
// delete p_names[1];
// console.log(p_names);
// sort
console.log(p_names.sort());
console.log(prices.sort());
//reverse
console.log(p_names.reverse());
console.log(prices.reverse());
//update
p_names[3] = "Moto pro";
console.log(p_names);
//concat
let p_names1 = ["Redmi", "Nokia"];
console.log(p_names.concat(p_names1));
// spread operator
let productNames = [...p_names, ...p_names1];
console.log(productNames);

// Array advanced methods
let sum = prices.reduce((tot, val) => {
    return tot + val;
})
console.log(sum);

// map
let offerPrice = prices.map((val) => {
    return val - 2000;
})
console.log(offerPrice);



