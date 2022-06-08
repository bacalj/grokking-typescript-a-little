"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(id, profile, initialLocation) {
        this.id = id;
        this.x = initialLocation.x;
        this.y = initialLocation.y;
        this.name = profile.name;
        this.strength = profile.strength;
    }
    lateralMove(changeX) {
        this.x = this.x + changeX;
    }
    verticalMove(changeY) {
        this.y = this.y + changeY;
    }
    powerChange(powerValue) {
        this.strength = this.strength + powerValue;
    }
    logStatus() {
        console.log(this);
    }
}
exports.Player = Player;
