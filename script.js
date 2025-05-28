let usersDiv = document.getElementById("users");
let postsDiv = document.getElementById("posts");

fetch('https://jsonplaceholder.typicode.com/users ')
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        for (let user of users) {
            let div = document.createElement("div");
            div.textContent = user.name;
            div.className = "user";

            div.addEventListener("click", function () {
                showPosts(user.id, user.name);
            });

            usersDiv.appendChild(div);
        }
    });

function showPosts(userId, userName) {
    postsDiv.innerHTML = "<h2>" + userName + "</h2>";

    fetch('https://jsonplaceholder.typicode.com/posts ')
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            let filteredPosts = posts.filter(function (post) {
                return post.userId == userId;
            });

            for (let post of filteredPosts) {
                let card = document.createElement("div");
                card.className = "post";

                card.innerHTML = "<strong>" + post.title + "</strong><p>" + post.body + "</p>";

                postsDiv.appendChild(card);
            }
        });
}