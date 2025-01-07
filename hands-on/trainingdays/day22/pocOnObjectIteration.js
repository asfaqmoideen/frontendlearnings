function createtd(order){
    for(let key in order){
        if(order.hasOwnProperty(key)){
            console.log(order[key]);
        }
    }
}

createtd({id:2, name:"hello", list:[{id:2, name:"hello"}, {id:2, name:"hello"}]});