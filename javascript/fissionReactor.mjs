/*
Made by DJ_Laser
Defines a class to get information about a fission reactor
*/

import coolants from "./coolants.mjs";
import BasicMultiblock from "./basicMultiblock.mjs"

export default class FissionReactor extends BasicMultiblock {
    coolant = coolants.water;

    validateLength(l) {
        return l <= 18 && l >= 3;
    }
    
    validateWidth(w) {
        return w <= 18 && w >= 3;
    }
    
    validateHeight(h) {
        return h <= 18 && h >= 4;
    }

    setCoolant(c) {
        let cools = Object.values(coolants)

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