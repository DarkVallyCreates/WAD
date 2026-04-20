document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST (dummy example)
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log("Data sent successfully");
            window.location.href = "list.html";
        }
    };

    xhr.send(JSON.stringify(user));
});