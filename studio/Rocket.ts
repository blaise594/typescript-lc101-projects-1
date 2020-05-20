import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
import {Payload} from './Payload';
export class Rocket{
    name:string;
    totalCapacityKg:number;
    //cargoItems should be an array of Cargo objects.
    cargoItems: Cargo[]=[];
    //astronauts should be an array of Astronaut objects.
    astronauts: Astronaut[]=[];
    //Constructor:
    // Parameter name should be a string.
    // Parameter totalCapacityKg should be a number.
    constructor(name:string, totalCapacityKg:number){
        // Sets value of this.name and this.totalCapacityKg
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // Methods:
    sumMass( items: Payload[] ): number{
        // Returns the sum of all items using each item's massKg property
        //declare accumulator
        let sum:number=0;
        for (let index = 0; index < items.length; index++) {
            sum += items[index].massKg;
        }
        return sum;
    }
    
    currentMassKg(): number{
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean{
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
    

    addCargo(cargo: Cargo): boolean{
        // Uses this.canAdd() to see if another item can be added.
        if(this.canAdd(cargo)){
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        // If false, returns false.
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        // Uses this.canAdd() to see if another astronaut can be added.
        if(this.canAdd(astronaut)){
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        }
        // If false, returns false.
        return false;
    }

    
}