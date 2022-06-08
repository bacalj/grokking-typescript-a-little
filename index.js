"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const element_1 = require("./element");
const afrog_1 = require("./afrog");
const awall_1 = require("./awall");
const apotion_1 = require("./apotion");
let theFrog = new player_1.Player('frog1', afrog_1.frog.info, afrog_1.frog.location);
let theWall = new element_1.Element('wall1', awall_1.wall.info, awall_1.wall.location);
let thePotion = new element_1.Element('potion1', apotion_1.potion.info, apotion_1.potion.location);
function logAll() {
    console.log('Logging everything:____');
    theFrog.logStatus();
    theWall.logStatus();
    thePotion.logStatus();
}
logAll();
