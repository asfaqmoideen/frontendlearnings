enum ParkingTypes {
    OpenAir,
    UnderGround,
    Terrace,
    ClosedSpace,
}

enum vehicleTypes {
    TwoWheeler,
    LMV,
    MiniVan,
    Bus,
}

type ParkingLot = {
    id :number;
    name : string , 
    capacity :number,
    lotType : ParkingTypes,
}

type Vehicle = {
    userName : string ,
    regNo : string ,
    vehicleType : vehicleTypes,
}

class ParkingLotController{

    private parkingLots : ParkingLot[] ;
    constructor() {
        this.parkingLots = [];
    }

    addParkingLot(parkingLot : ParkingLot) {
        this.parkingLots.push(parkingLot)
    }

    tryAllocatingParkingSpace(vehicle : Vehicle){
        const vehicleType :number = vehicle.vehicleType;
        const lot = this.parkingLots.find(v => v.lotType == vehicleType);
            if(lot && lot.capacity > 0) {
                console.log(`Lot allocated for ${vehicle.userName} - ${vehicle.regNo} with ${ParkingTypes[lot.lotType]} Slot No. ${lot.capacity}`);
                lot.capacity --;
                return;
            }
        console.log("No spaces available for this this vehicle type !");
    }

    checkoutVehicle(vehicle : Vehicle) {
        const vehicleType :number = vehicle.vehicleType;
        const lot = this.parkingLots.find(v => v.lotType == vehicleType);
        if(lot){
            if(lot.capacity > 0) {
                console.log(`Lot De-Allocated for ${vehicle.userName} - ${vehicle.regNo} with ${ParkingTypes[lot.lotType]} Slot No. ${lot.capacity}`);
                lot.capacity ++;
                return;
            }
        }
        console.log("No spaces available for this this vehicle type !");
    }
}

const parkCon = new ParkingLotController();

parkCon.addParkingLot({id :1, name : "WestSide", capacity : 20, lotType : ParkingTypes.OpenAir});
parkCon.addParkingLot({id :2, name : "BroadWay", capacity : 40, lotType : ParkingTypes.ClosedSpace});
parkCon.addParkingLot({id :3, name : "NorthExtended", capacity : 20, lotType : ParkingTypes.UnderGround});

console.log(parkCon);

parkCon.tryAllocatingParkingSpace({userName : "Asfaq", regNo : "65789", vehicleType : vehicleTypes.LMV});
parkCon.tryAllocatingParkingSpace({userName : "Kamalesh", regNo : "98230", vehicleType : vehicleTypes.TwoWheeler});
parkCon.tryAllocatingParkingSpace({userName : "Darshini", regNo : "7680", vehicleType : vehicleTypes.LMV});
parkCon.tryAllocatingParkingSpace({userName : "Chirag", regNo : "4678", vehicleType : vehicleTypes.Bus});