//next to thisdemo.js
//call method 
const prodInfo = {
    // p_id: 1001,
    // p_name: "samsung",
    p_details: function (rating, price) {
        return this.p_id + " " + this.p_name + " " + rating + " " + price

    }
}
const product = {
    p_id: 1001,
    p_name: "samsung",
}
// console.log(prodInfo.p_details(4, 30000))
console.log(prodInfo.p_details.call(product, 4, 30000))