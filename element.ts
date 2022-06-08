import { MapLocation } from "./theTypes";

// TODO: how would I guarantee that an element cannot be instantiated unless <T> matches Obstacle, or Potion?
export class Element<T> implements MapLocation {
    id: string
    x: number
    y: number
    details: T

    constructor(id: string, details: T, initialLocation: MapLocation ){
        this.id = id
        this.x = initialLocation.x
        this.y = initialLocation.y
        this.details = details
    }

    logStatus(){
        console.log(this)
    }

}