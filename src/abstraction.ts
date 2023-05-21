// <<<<<<<<<<===============interface==================>>>>>>>>>>>>>>>

// interface Ivehicle {
//     startEngine(): void
//     stopEngine(): void
//     move(): void
// }

// class Vehicle implements Ivehicle {

//     constructor(
//         public name: string,
//         public brand: string,
//         public model: string
//     ) { 

//     }

//     startEngine(): void {
//         console.log("Engine started")
//     }
//     stopEngine(): void {
//         console.log("Engine stopped")
//     }
//     move(): void {
//         console.log("Vehicle is moving")
//     }
//     test() {
//         console.log("I am for testing purpose")
//     }
// }

// const vehicle1 = new Vehicle( "car",'Toyota', "2019")

// <<<<<<<<<<===============abstract class==================>>>>>>>>>>>>>>>

abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: string
    ) {

    }

    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log("Vehicle is moving")
    }
}


class Car extends Vehicle {
    startEngine(): void {
        console.log("Engine started")
    }
    stopEngine(): void {
        console.log("Engine stopped")
    }
}

