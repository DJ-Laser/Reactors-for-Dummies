/*
Made by DJ_Laser
Defines an enum-like object listing coolant types
*/

class Coolant {
    name;
    heated;

    constructor(name, heated) {
        this.name = name;
        this.heated = heated;
    }

    getName() {
        return this.name;
    }

    getHeated() {
        return this.heated();
    }
}

const coolants = {
    water: new Coolant("water", "steam"),
    sodium: new Coolant("sodium", "superheated sodium")
}

Object.freeze(coolants)
Object.preventExtensions(coolants)

export default coolants;