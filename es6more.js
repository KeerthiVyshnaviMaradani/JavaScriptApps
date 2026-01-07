// multi line strings
let desc = `Vignans Lara Institute of technology science is one of the top college in Ap
 more recruitments 
 many activities`;
console.log(desc);
// string interpolation
let firstName = "Keerthi";
let lastName = "Maradani";
console.log(`${firstName} ${lastName}`);
//array destructing
let p_names = ["realme", "lg", "vivo"];
let [brand1, brand2, brand3] = p_names;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
let movieInfo = {
    mName: "Bahubali",
    director: "Rajamouli",
    producer: "Shobu"

}
let { mName, director, producer } = movieInfo;
console.log(mName);
console.log(director);
console.log(producer);

