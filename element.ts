import { MapLocation } from "./theTypes";

export class Element<T> implements MapLocation {
    id: string
    x: number
    y: number
    details: T

    constructor(id: string, initialLocation: MapLocation, details: T){
        this.id = id
        this.x = initialLocation.x
        this.y = initialLocation.y
        this.details = details
    }

    logStatus(){
        console.log(this)
    }

}