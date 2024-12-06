
class Login{
    constructor(userid, password){
        this.userid = userid;
        this.password = password;
    }

    trylogin() {
        if (this.userid === "asfaq@ae.com" && this.password === "esfaq") {
            sessionStorage.setItem("loggedIn", "true");
            document.location = "/src/pages/home.html"; // Redirect to add.html page
        } else {
            document.getElementById("error").textContent = "Invalid username or password.";
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    
    const loginform = document.getElementById('login-form');

    loginform.addEventListener('submit', (event)=>{
        event.preventDefault();

        const login = new Login(loginform.userId.value, loginform.password.value);
        login.trylogin();
    })

    const logoutbtn = document.getElementById('logout-btn');
    logoutbtn.addEventListener('click', ()=>{
        const logout = new Logout();
        logout.trylogout();
    });

})
class Logout{
    trylogout(){
        sessionStorage.removeItem('loggedIn');
        document.location = "/index.html";
}
}