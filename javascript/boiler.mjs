/*
Made by DJ_Laser
Defines a class to get information about a thermoelectric boiler
*/

import BasicMultiblock from "./basicMultiblock.mjs"

export default class Boiler extends BasicMultiblock {
    superheraters = 1;
    disperserLayer = 2;

    validateDisperserLayer(h) {
        return h <= this.getInnerHeight() && h >= 1;
    }

    setDisperserLayer(h) {
        let valid = this.validateDisperserLayer(h);
        if (valid) {
            this.disperserLayer = h;
        }
        return valid;
    }

    getMaxSuperheatersPerLayer() {
        return this.getVerticalFaceSize();
    }

    getSuperHeaterLayers() {
        return Math.floor(this.superheraters / this.getMaxSuperheatersPerLayer());
    }

    getMaxSuperHeaterLayers() {
        return this.disperserLayer - 1;
    }

    getPartialHeaterLayerAmount() {
        let heaters = this.getSuperHeaterLayers() * this.getMaxSuperheatersPerLayer();
        return this.superheraters - heaters;
    }
}