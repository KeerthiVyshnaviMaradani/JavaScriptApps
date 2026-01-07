//promises demo
const movieRating = new Promise((resolve, reject) => {
    let rating = 3;
    if (rating > 4) {
        resolve("Good Movie");
    }
    else {
        reject("Waste of our time");
    }
});
//To call promises/to execute promises
movieRating.then((result) => {
    console.log(result);

}).catch((result) => {
    console.log(result);
})
