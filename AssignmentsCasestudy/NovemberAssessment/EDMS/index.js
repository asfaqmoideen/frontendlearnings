
class Login{
    constructor(userid, password){
        this.userid = userid;
        this.password = password;
    }

    trylogin() {
        if (this.userid === "alice101" && this.password === "alice") {
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("username", this.userid);
            document.location = "/src/pages/home.html"; 
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
    

})