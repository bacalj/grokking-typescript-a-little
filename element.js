"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
class Element {
    constructor(id, details, initialLocation) {
        this.id = id;
        this.x = initialLocation.x;
        this.y = initialLocation.y;
        this.details = details;
    }
    logStatus() {
        console.log(this);
    }
}
exports.Element = Element;
