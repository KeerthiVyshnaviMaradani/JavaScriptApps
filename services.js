// api calling logic with async and await
const getDetails = async () => {
    // request data
    let userId = document.getElementById("userId").value;
    let para = document.getElementById("simple");
    let result = document.getElementById("sample");

    // validation logic
    if (userId === "") {
        alert("Enter user Id");
        return;
    }

    para.style.display = "block";
    result.innerHTML = "";

    try {
        const [userres, postres] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        const userdata = await userres.json();
        const postdata = await postres.json();

        para.style.display = "none";

        result.innerHTML = `
            <h3>${userdata.name}</h3>
            <p>${userdata.email}</p>
        //     <p>Total Posts: ${postdata.length}</p>
        // `;

    } catch (error) {
        para.style.display = "none";
        result.innerHTML = "<h3>Something went wrong</h3>";
    }
};
