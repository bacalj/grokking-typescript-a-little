import { MapLocation } from "./theTypes";

export class Element<SomeType> implements MapLocation {
    id: string
    x: number
    y: number
    details: SomeType

    constructor(id: string, details: SomeType, initialLocation: MapLocation ){
        this.id = id
        this.x = initialLocation.x
        this.y = initialLocation.y
        this.details = details
    }

    logStatus(){
        console.log(this)
    }

} 