
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
        sessionStorage.removeItem('loggedIn');
        document.location = "/index.html";
}
}