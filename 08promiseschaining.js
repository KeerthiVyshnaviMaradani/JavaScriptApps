//promises chaining
const bookTicket = (msg) => {
    return new Promise((resolve, reject) => {
        resolve(msg + "Ticket booked");
    });

};

const getPopcorn = (msg) => {
    return new Promise((resolve, reject) => {
        resolve(msg + "Popcorn obtained");
    });
};

const getCoke = (msg) => {
    return new Promise((resolve, reject) => {
        resolve(msg + "Coke obtained");
    })
}
// execute
bookTicket("Movie ")
    .then((result) => {
        return getPopcorn(result);
    })
    .then((result) => {
        return getCoke(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });