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
        sessionStorage.removeItem('loggedIn');
        document.location = "/index.html";
}
}