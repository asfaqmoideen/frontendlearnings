document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("somebtn").addEventListener('click', ()=>{
        tryEatingCake();
       // tryDoingCake();
    });

    document.getElementById("otherbtn").addEventListener("click",()=>{
        tryListeningMusic();
    });

    document.getElementById("parallelbtn").addEventListener('click', ()=> {
        tryDoingParalleley();
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
            const plate =  washYourPlates();
            return plate; // Another promise     
        })
        .then(plate => {   // Chaining
            displayOutput(plate + "Washed !");
        })
        .catch(e => {
            displayOutput(e.message);
        })
        displayOutput(callAlex());
        
}

async function tryDoingCake(){
    const cake = await orderCake();
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

function tryDoingParalleley(){
    allTasks = [orderCake(), listenToMusic()];

    Promise.all(allTasks).then(tasks => {
        const [result1, result2] = tasks;

        displayOutput(result1);
        displayOutputTwo(result2);
    })
}





function tryGettingChocoRoll(){
    return new Promise((resolve, reject) => {
        if(IsRollAvailable()){
            console.log("Getting Roll ready..");
            setTimeout(()=>{
                resolve("🍫");
            }, 3000)
        }
        else{
            reject(new Error("Choco Not Available"));
        }
    })
}

function IsRollAvailable(){
    return true;
}

function EatChocoRoll(){
    tryGettingChocoRoll()
        .then((chocoRoll) => {
            console.log("Eating "+chocoRoll);
        })
        .catch((err) => {
            console.log("Got with error"+err.message);
        })
    console.log("Calling adel ... ");
}

async function doSomething(){
    const choco = await tryGettingChocoRoll();
    console.log("Calling Anupam");
    return choco;
}

const x = await doSomething();
console.log("hiii" + x);
