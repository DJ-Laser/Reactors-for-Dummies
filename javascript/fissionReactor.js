/*
Made by DJ_Laser
Defines a class to get information about a fission reactor
*/

import coolants from "./coolants.js";
import BasicMultiblock from "./basicMultiblock.js"

export default class Reactor extends BasicMultiblock {
    coolant = coolants.water;

    setCoolant(c) {
        let cools = Object.keys(coolants);

        if (cools.includes(c)) {
            this.coolant = c;
            return true;
        } else {
            return false;
        }
    }
    
    getMaxControlRods() {
        return Math.ceil(this.getInnerLength() * this.getInnerWidth() / 2);
    }

    getMaxFuelAssemblies() {
        return this.getMaxControlRods() * (this.getInnerHeight() - 1);
    }

    getMaxSafeBurnRate() {
        cool = this.coolant;

        if (cool = coolants.water) {
            return math.min(this.getMaxFuelAssemblies(), 700)
        } else if (cool = coolants.sodium) {
            return math.min(this.getMaxFuelAssemblies(), 1400);
        } else {
            return undefined;
        }
    }
}

let r1 = new Reactor();