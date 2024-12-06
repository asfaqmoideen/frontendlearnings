
class Ticket{
    constructor(filmName, showTime){
        this.id = genarateid();
        this.movieName = filmName;
        this.time = showTime;
    }
}
let num = 1;
 function genarateid(){
    return ++num;
 }
const pushpa2 = new Ticket("Pushpa2", 1800);

const viduthalai = new Ticket("Viduthalai2", 2000);


class TicketController{
    constructor(){
        this.ticketArray = [];
    }
    addTicket(tickect){
        
        this.ticketArray.push(tickect);
    }
    
    showAllTickets(){
        return this.ticketArray;
    }
    
    removeTicket(tickect){
        const tickInd = this.ticketArray.findIndex(t=> t.id === tickect.id);
        
        this.ticketArray.splice(tickInd, 1);
    }
}

const tickCont = new TicketController();
tickCont.addTicket(pushpa2);
tickCont.addTicket(viduthalai);
console.log(tickCont.showAllTickets());
tickCont.removeTicket(pushpa2);
console.log(tickCont.showAllTickets());

