window.onload = function() {
        if (!sessionStorage.getItem("loggedIn")) {
            window.location.href = "login.html"; // Redirect if not logged in
        }
};

function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html"; // Redirect to login page
}

document.addEventListener("DOMContentLoaded", ()=>{
    const logButton = document.getElementById("logout");
    logButton.addEventListener("click", ()=>{
        logout();
    })
})