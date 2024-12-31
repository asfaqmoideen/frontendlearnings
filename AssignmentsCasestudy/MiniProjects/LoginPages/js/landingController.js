
document.addEventListener("DOMContentLoaded", ()=>{
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "login.html"; // Redirect if not logged in
    }

    const logButton = document.getElementById("logout");
    logButton.addEventListener("click", ()=>{
        window.location.href = "logout.html";
    })
})