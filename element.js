"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
// TODO: how would I guarantee that an element cannot be instantiated unless <GameElement> matches Obstacle, or Potion? How can I access the value of <GameElement> in my constructor or anywhere else?
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
