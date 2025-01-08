document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("somebtn").addEventListener('click', ()=>{
        tryEatingCake();
    });

    document.getElementById("otherbtn").addEventListener("click",()=>{
        tryListeningMusic();
    })
})

function displayOutput(message){
    document.getElementById("output").textContent += `-> ${message}`
}

function displayOutputTwo(message){
    document.getElementById('output2').textContent += `=> ${message}`
}


function orderCake(){
    displayOutput("Cake Ordered");
    return new Promise((resolve, reject) => {
        if(isCakeAvailable()){
            displayOutput("Preparing Cake...");
            setTimeout(()=>{
                displayOutput("Cake ready");
                resolve("🍰");
            }, 5000)
        }
        else{
            reject(new Error("Cake not Available"));
        }
    })
}

const isCakeAvailable = () => true;

async function tryEatingCake(){
    orderCake()
        .then(cake => {
            eatCake(cake);
            return washYourPlates();
        })
        .then(plate => {
            displayOutput(plate + "Washed !");
        })
        .catch(e => {
            displayOutput(e.message);
        })
        displayOutput(callAlex());
        
}


function eatCake(cake){
    displayOutput("Eating Cake" + cake);
}

function callAlex(){
    displayOutput("Calling Alex ... ");
    return "Alex : We'll Catch you up later"
}

function washYourPlates(){
    displayOutput("trying to wash plates");
    return new Promise((resolve, reject)=>{
        if(isWaterAvailable()){
            displayOutput("Washing Plates..");
            setTimeout(()=> {
                resolve("🍽️");
            }, 2000)
        }
        else {
            reject(new Error("Water Not Available"));
        }
    })
}

const isWaterAvailable = () => true;

function tryListeningMusic() {
    listenToMusic()
        .then(music=>{
            displayOutputTwo(music);
        })
        .catch(e =>{
            displayOutputTwo(e.message)
        })
}

const isInternetAvailable = () => true;

function listenToMusic(){
    return new Promise((resolve, reject)=>{
        if(isInternetAvailable()){
            displayOutputTwo('Opening Spotify')
            setTimeout(()=>{
                resolve("Listenting music 🎵");
            }, 2000)
        }
        else{
            reject(new Error("Internet not connected"));
        }
    })
}