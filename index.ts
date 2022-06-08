import { Player } from "./player";
import { Element } from "./element";
import { GameElement } from "./theTypes";
import { frogData, wallData, potionData, carData } from "./myData"

let theFrog = new Player('frog1', frogData.info, frogData.location)
let theWall = new Element<GameElement>('wall1', wallData.info, wallData.location )
let thePotion = new Element('potion1', carData.info, potionData.location )

function logAll(){
    console.log('Logging everything:____')
    theFrog.logStatus()
    theWall.logStatus()
    thePotion.logStatus()
}

logAll()

