
document.addEventListener('DOMContentLoaded', ()=>{
    
    document.getElementById('logout-btn').addEventListener('click', ()=>{
        const logout = new Logout();
        logout.trylogout();
    });

    document.getElementById('container1').addEventListener('click',()=>{
        document.location = "/src/pages/PIMS.html";
    });
    document.getElementById('container2').addEventListener('click',()=>{
        document.location = "/src/pages/OMS.html";
    });
    document.getElementById('container3').addEventListener('click',()=>{
        document.location = "/src/pages/EMS.html";
    });

})
class Logout{
    trylogout(){
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