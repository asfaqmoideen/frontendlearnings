document.addEventListener('DOMContentLoaded', ()=>{
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "/index.html";
    }
    const welcomeuser = document.getElementById("usernamedisp");
    welcomeuser.textContent = sessionStorage.getItem('username');

    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sidebar.style.right = '0px';
    });
     
     
    closeBtn.addEventListener('click', () => {
        sidebar.style.right = '-250px';
    });
     
    const logoutbtn = document.getElementById('logout-btn');
    logoutbtn.addEventListener('click', ()=>{
        const logout = new Logout();
        logout.trylogout();
    })
})

class Logout{
    trylogout(){
        sessionStorage.removeItem('loggedIn');
        document.location = "/index.html";
}
}