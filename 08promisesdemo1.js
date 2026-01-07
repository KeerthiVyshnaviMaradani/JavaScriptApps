const bubblescore = new Promise((resolve, reject) => {
    let randomNum = Math.floor(Math.random() * 10);
    console.log("Random Number:", randomNum);

    if (randomNum >= 5) {
        resolve("High Score");
    } else {
        reject("Low Score");
    }
});


bubblescore.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
