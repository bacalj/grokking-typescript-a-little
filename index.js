"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const Frog_1 = require("./Frog");
// import { Wall } from "./wall"
// let theWall = new Element()
let theFrog = new player_1.Player('frog1', Frog_1.frog.info, Frog_1.frog.location);
theFrog.logStatus();
