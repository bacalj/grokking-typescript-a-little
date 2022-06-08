import { Player } from "./player";
import { Element } from "./element";
import { frogData, wallData, potionData } from "./myData"

let theFrog = new Player('frog1', frogData.info, frogData.location)
let theWall = new Element('wall1', wallData.info, wallData.location )
let thePotion = new Element('potion1', potionData.info, potionData.location )

function logAll(){
    console.log('Logging everything:____')
    theFrog.logStatus()
    theWall.logStatus()
    thePotion.logStatus()
}

logAll()

