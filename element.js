"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
// TODO: how would I guarantee that an element cannot be instantiated unless <T> matches Obstacle, or Potion?
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
