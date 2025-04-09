document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "/index.html";
  }
  const logoutbtn = document.getElementById('logout-btn');
  logoutbtn.addEventListener('click', ()=>{
      const logout = new Logout();
      logout.trylogout();
  });

  
    const sidebarItems = document.querySelectorAll(".sidebar ul li");
    const contentSections = document.querySelectorAll(".content");
  
    
        sidebarItems.forEach((item) => {
          item.addEventListener("click", () => {
            switchContent(item.id);
          });
        });

    function switchContent(id) {
      contentSections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === `${id}-content`) {
          section.classList.add("active");
        }
      });
  
      sidebarItems.forEach((item) => {
        item.classList.remove("active");
      });
  
      document.getElementById(id).classList.add("active");
    }
  });
  

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