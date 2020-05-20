"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    //Constructor:
    // Parameter name should be a string.
    // Parameter totalCapacityKg should be a number.
    function Rocket(name, totalCapacityKg) {
        //cargoItems should be an array of Cargo objects.
        this.cargoItems = [];
        //astronauts should be an array of Astronaut objects.
        this.astronauts = [];
        // Sets value of this.name and this.totalCapacityKg
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // Methods:
    Rocket.prototype.sumMass = function (items) {
        // Returns the sum of all items using each item's massKg property
        //declare accumulator
        var sum = 0;
        for (var index = 0; index < items.length; index++) {
            sum += items[index].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        // Uses this.canAdd() to see if another item can be added.
        if (this.canAdd(cargo)) {
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        // If false, returns false.
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another astronaut can be added.
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        }
        // If false, returns false.
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
