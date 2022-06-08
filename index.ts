import { Player } from "./player";
import { Element } from "./element";
import { frog } from "./afrog"
import { wall } from "./awall"
import { potion } from "./apotion"

let theFrog = new Player('frog1', frog.info, frog.location)
let theWall = new Element('wall1', wall.info, wall.location )
let thePotion = new Element('potion1', potion.info, potion.location )

function logAll(){
    console.log('Logging everything:____')
    theFrog.logStatus()
    theWall.logStatus()
    thePotion.logStatus()
}

logAll()

