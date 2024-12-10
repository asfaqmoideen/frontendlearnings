class BusTicket{
    constructor(Id, Name, Price, Source, Destination){
        this.id = Id;
        this.name = Name;
        this.price = Price;
        this.source = Source;
        this.destination = Destination;
    }
}





class BusTicketController{
    constructor(){
        this.bustickets = [];
    }

    bookTicket(ticket){
        this.bustickets.push(ticket);
    }

    cancelTicket(id){

        const ind = this.bustickets.findIndex(t=> t.id == id);

        if(ind != -1){
            this.bustickets.splice(ind, 1);
            return true
        }
        return false;
    }

    updateTicket(tickect){
        const tickettobeupdated = this.bustickets.find(t=> t.id == tickect.id);
        if(tickettobeupdated){
            Object.assign(tickettobeupdated, tickect);
            return true;
        }
        return false;
    }
}
 

const buscon = new BusTicketController();

buscon.bookTicket(new BusTicket(1, "adel", 2000, "cbe", "mas"));
buscon.bookTicket(new BusTicket(2, "abel", 2000, "cbe", "poy"));
buscon.bookTicket(new BusTicket(3, "adal", 2000, "cbe", "try"));
console.log(buscon.bustickets);

console.log(buscon.updateTicket(new BusTicket(2, "santhu", 3000, "jap", "hong")));
console.log(buscon.updateTicket(new BusTicket(10, "santhu", 3000, "jap", "hong")));
console.log(buscon.bustickets);
console.log(buscon.cancelTicket(3));
console.log(buscon.cancelTicket(10));

console.log(buscon.bustickets);