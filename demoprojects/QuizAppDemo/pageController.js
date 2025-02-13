document.addEventListener("DOMContentLoaded", () => {
  
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
          console.log("da", id);
        });
    
        sidebarItems.forEach((item) => {
          item.classList.remove("active");
        });
    
        document.getElementById(id).classList.add("active");
      }
    });
    