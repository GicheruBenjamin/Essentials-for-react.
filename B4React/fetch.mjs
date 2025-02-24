

// Fetching data from a public API jsonplaceholder.typicode.com

function FetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(user => {
                console.log(user.id , user.name); // Log each user's name
            });
        })
        .catch(error => {
            console.error("Error dude, need to check your internet connection:", error.message);
        });
}

FetchUsers();
