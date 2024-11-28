

document.addEventListener('DOMContentLoaded',()=>{
    const overlay = document.getElementById('overlay');

    // const searchbtn = document.getElementById('search-in-home');
    // const closeButton = document.getElementById('back-from-search');
    // const dialog = document.getElementById('emp-details');
    
    //     searchbtn.addEventListener('click', function() {
    //         dialog.style.display = 'block';
    //         overlay.style.display = 'block';
    //     });
        
        
    //     closeButton.addEventListener('click', function() {
    //         dialog.style.display = 'none';
    //         overlay.style.display = 'none';
    //     });

    const importbtn = document.getElementById('import-file-home');
    const closebtn = document.getElementById('back-from-dialog');
    const dialog2 = document.getElementById('import-file');
    
    closebtn.addEventListener('click', function() {
        dialog2.style.display = 'none';
        overlay.style.display = 'none';
    });
    
    importbtn.addEventListener('click', function() {
        dialog2.style.display = 'block';
        overlay.style.display = 'block';
    });
})

