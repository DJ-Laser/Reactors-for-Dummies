/*
Made by DJ_Laser
Calculator for fission reactor stats

TODO:
Implement methods to get reactor statistics

*/

import Coolants from "./coolants.mjs";

export default class Reactor {
    length = 3;
    width = 3;
    height = 4;
    coolant = Coolants.water;
    
    validateLength(l) {
        return(l >= 3 && l <= 18);
    }
    
    validateWidth(w) {
        return(this.validateLength(w));
    }
    
    validateHeight(h) {
        return(h >=4 && h <= 18);
    }
    
    validateDimensions(l, w, h) {
        return(this.validateLength(l) && this.validateWidth(w) && this.validateHeight(h));
    }
    
    setDimensions(l, w, h) {
        let valid = this.validateDimensions(l, w, h);
        if (valid){
            this.length = l;
            this.width = w;
            this.height = h;
        }
        return(valid);
    }

    setLength(l) {
        let valid = this.validateLength(l);
        if (valid) {
            this.length = l;
        }
        return(valid);
    }

    setWidth(w) {
        let valid = this.validateWidth(w);
        if (valid) {
            this.width = w;
        }
        return(valid);
    }

    setHeight(h) {
        let valid = this.validateHeight(h)
        if (valid) {
            this.height = h;
        }
        return(valid);
    }

    setCoolant(c) {
        let cools = Object.keys(Coolants);

        if (cools.includes(c)) {
            this.coolant = c;
            return true;
        } else {
            return false;
        }
    }
    
    getInnerLength() {
        return(this.length - 2);
    }

    getInnerWidth() {
        return(this.width - 2);
    }

    getInnerHeight() {
        return(this.height - 2);
    }

    getInnerArea() {
        return(this.getInnerLength() * this.getInnerWidth() * this.getInnerHeight());
    }

    getMaxControlRods() {
        return(Math.ceil(this.getInnerLength() * this.getInnerWidth() / 2));
    }

    getMaxFuelAssemblies() {
        return(this.getMaxControlRods() * (this.getInnerHeight() - 1));
    }

    getMaxSafeBurnRate() {
        cool = this.coolant;

        if (cool = Coolants.water) {

        } else if (cool = Coolants.sodium) {
            return(math.min(this.getMaxFuelAssemblies(), 1400));
        } else {
            return undefined;
        }
    }
}

let r1 = new Reactor();