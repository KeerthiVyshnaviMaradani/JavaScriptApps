const movieInfo = {
    heroName: "VD",
    villianName: "Devdas Shetty",
    movieDetails: function () {
        return this.heroName + " " + this.villianName

    }
}
const bahubali = {
    heroName: "prabhas",
    villianName: "Raana"
}
const movieResult = movieInfo.movieDetails.bind(bahubali);

// console.log(movieInfo.movieDetails())
console.log(movieResult())