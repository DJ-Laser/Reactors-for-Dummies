/*
Made by DJ_Laser
Defines a class to get information about a cuboid multiblock
*/

export default class BasicMultiblock {
    length = 3;
    width = 3;
    height = 4;

    validateLength(l) {
        return l <= 18 && l >= 3;
    }

    validateWidth(w) {
        return w <= 18 && w >= 3;
    }

    validateHeight(h) {
        return h <= 18 && h >= 4;
    }

    validateDimensions(l, w, h) {
        return (
            this.validateLength(l) &&
            this.validateWidth(w) &&
            this.validateHeight(h)
        )
    }

    setDimensions(l, h, w) {
        let valid = this.validateDimensions(l, w, h);
        if (valid) {
            this.setLength(l);
            this.setWidth(w);
            this.setHeight(h);
        }
        return valid;
    }

    setLength(l) {
        let valid = this.validateLength(l);
        if (valid) {
            this.length = l;
        }
        return valid;
    }

    setWidth(w) {
        let valid = this.validateWidth(w);
        if (valid) {
            this.width = w;
        }
        return valid;
    }

    setHeight(h) {
        let valid = this.validateHeight(h)
        if (valid) {
            this.height = h;
        }
        return valid;
    }

    getInnerLength() {
        return this.length - 2;
    }

    getInnerWidth() {
        return this.width - 2;
    }

    getInnerHeight() {
        return this.height - 2;
    }

    getInnerArea() {
        return this.getInnerLength() * this.getInnerWidth() * this.getInnerHeight();
    }

    getEdgeBlockAmount() {
        return (this.length * 4) + (this.getInnerWidth() * 4) + (this.getInnerHeight() * 4);
    }

    getFrontFaceSize() {
        return this.getInnerLength() * this.getInnerHeight();
    }

    getSideFaceSize() {
        return this.getInnerWidth() * this.getInnerHeight();
    }

    getVerticalFaceSize() {
        return this.getInnerLength() * this.getInnerWidth();
    }

    getFaceBlockAmount() {
        let fFace = this.getFrontFaceSize();
        let sFace = this.getSideFaceSize();
        let vFace = this.getVerticalFaceSize();

        return (fFace * 2) + (sFace * 2) + (vFace * 2)
    }
}