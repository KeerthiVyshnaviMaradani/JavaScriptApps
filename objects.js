//objects in js
const movieInfo = {
    movieName: "Akanda-2",
    heroName: "Bala Krishna",
    directorName: "Boyapati Srinivas"

}
// how to get specific property
console.log(movieInfo.directorName);
console.log(movieInfo["heroName"]);
for (let info in movieInfo) {
    console.log(movieInfo[info]);
}
//es 6+ new features
//object.keys
//to get properties
Object.keys(movieInfo).forEach((key) => {
    console.log(key)


});
//to get values - objects.values
Object.values(movieInfo).forEach((val) => {
    console.log(val)
});
// to get key and values - object.entries
Object.entries(movieInfo).forEach((keyvaluepair) => {
    console.log(keyvaluepair);
})
//
Object.entries(movieInfo).forEach((keyvaluepair) => {
    console.log(keyvaluepair[0] + " " + keyvaluepair[1]);
})
// for-of
for (let [infos, infoVal] of Object.entries(movieInfo)) {
    console.log(infos + " " + infoVal);
}
//EXPLORE OTHER METHODS HOMEWORK
// nested object
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
console.log(myObj.cars[0].models);
console.log(myObj.cars[1].name);
//  flipkart - cart object
const placedorder = {
    products: [
        { p_id: 1024, p_name: "Drone", price: "10000" },
        { p_id: 1101, p_name: "AC", price: 30000 }],
    shippingAddress: {
        Area: "Vadlamudi",
        street: "Vignan",
        pincode: 522213
    },
    userinfo: { uId: 1001, uName: "Keerthi" }

}
console.log(placedorder.userinfo.uName);
//facebook post object - homework