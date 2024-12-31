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

    document.getElementById('sidelist').addEventListener('click', ()=>{
        sidebar.style.right = '-250px';
    })
})

class Logout{
    trylogout(){
        debugger;
        this.getUserConfirmation('to leave this session')
            .then((result=>{
                if(result){
                    sessionStorage.removeItem('loggedIn');
                    document.location = "/index.html";
                }
            }))
    }
    
   getUserConfirmation(context) {
    const confirm = document.getElementById('confirmation');
    confirm.style.display = 'block';
    document.getElementById('confirm-title').textContent = `Are you sure ${context}?`;

    return new Promise((resolve) => {
        document.getElementById('yesbtn').onclick = () => {
            confirm.style.display = 'none';
            resolve(true);
        };
        document.getElementById('nobtn').onclick = () => {
            confirm.style.display = 'none';
            resolve(false);
        };
    });
}

}