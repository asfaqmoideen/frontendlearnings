document.addEventListener('DOMContentLoaded', ()=>{
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "/index.html"; // Redirect if not logged in
    }
    const welcomeuser = document.getElementById("usernamedisp");
    console.log(sessionStorage.getItem('username'));
    welcomeuser.textContent = sessionStorage.getItem('username');

    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sidebar.style.right = '0px';
    });
     
     
    closeBtn.addEventListener('click', () => {
        sidebar.style.right = '-250px';
    });
     
})