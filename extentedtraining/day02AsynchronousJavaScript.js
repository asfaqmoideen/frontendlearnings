function EatPizza(pizza) {
    console.log("Eating" + pizza);
}


function changeState(foo){
    document.getElementById("somebtn").textContent = "Eat Pizza";
    EatPizza(foo);
}

function OrderPizza(callback){
    console.log("Pizza ordered");
    setTimeout(function(){
        callback('🍕');
    }, 5000);
}

function CallFriend(){
    console.log("Calling friend");
    setTimeout(function() {
        console.log("friend took the call");
    });
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("somebtn")
    .addEventListener("click", ()=>{
        if(this.textContent == "Eat Pizza"){
            EatPizza()
        }
        OrderPizza(changeState);
    })
    
    document.getElementById("callbtn")
    .addEventListener("click", ()=>{
        CallFriend();
    })

})
