"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const element_1 = require("./element");
const myData_1 = require("./myData");
let theFrog = new player_1.Player('frog1', myData_1.frogData.info, myData_1.frogData.location);
let theWall = new element_1.Element('wall1', myData_1.wallData.info, myData_1.wallData.location);
let thePotion = new element_1.Element('potion1', myData_1.carData.info, myData_1.potionData.location);
function logAll() {
    console.log('Logging everything:____');
    theFrog.logStatus();
    theWall.logStatus();
    thePotion.logStatus();
}
logAll();
