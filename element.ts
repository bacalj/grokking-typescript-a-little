import { MapLocation, Potion, Obstacle } from "./theTypes";

// TODO: how would I guarantee that an element cannot be instantiated unless <T> matches Obstacle, or Potion? How can I access the value of <T> in my constructor or anywhere else?
export class Element<GameElement> implements MapLocation {
    id: string
    x: number
    y: number
    details: GameElement

    constructor(id: string, details: GameElement, initialLocation: MapLocation ){
        this.id = id
        this.x = initialLocation.x
        this.y = initialLocation.y
        this.details = details
    }

    logStatus(){
        console.log(this)
    }

} 