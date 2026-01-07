//api calling logic with async await
const todosData = async () => {
    try {
        let result = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await result.json();
        console.log(data);

    } catch (error) {
        console.log(error);

    }

}
todosData();
