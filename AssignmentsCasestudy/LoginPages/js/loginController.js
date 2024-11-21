function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    // Simple hardcoded validation
    if (username === "poc" && password === "pass") {
        sessionStorage.setItem("loggedIn", "true");
        document.location = "landing.html"; // Redirect to add.html page
    } else {
        document.getElementById("error").innerText = "Invalid username or password.";
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const logButton = document.getElementById("login");
    logButton.addEventListener("click", ()=>{
        login();
    })
})