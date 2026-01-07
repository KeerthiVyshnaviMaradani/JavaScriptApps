
const movieRating = () => {
    return new promise = (resolve, reject) => {
        let rating = 3;
        if (rating > 4) {
            resolve("Good Movie");
        }
        else {
            reject("Waste of our time");
        }
    };
};
// calling promise with async await methods
const result = async () => {
    try {
        const res = await movieResult();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
result();
