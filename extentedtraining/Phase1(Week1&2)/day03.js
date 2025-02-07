

function tryGettingChocoRoll(){
    return new Promise((resolve, reject) => {
        if(IsRollAvailable()){
            console.log("Getting Roll ready..");
            setTimeout(()=>{
                resolve("🍫")
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
            console.log("Eating "+ chocoRoll);
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