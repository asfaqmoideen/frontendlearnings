
    document.addEventListener("DOMContentLoaded", ()=>{

        const x = document.getElementById("textbox");
        const z= document.getElementById("spanArea");

        x.addEventListener("change", ()=>{
            console.log("text box changing to "+x.value+1);
        })

        const y = document.getElementById("button");

        y.addEventListener("click", ()=>{
            console.log("button is clicked");
            z.textContent = x.value+1;
        })
    })