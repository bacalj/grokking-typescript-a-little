import { Actor, MapLocation } from './theTypes'

export class Player implements Actor, MapLocation {
    
    id: string
    x: number
    y: number
    name: string
    strength: number

    constructor(id: string, profile: Actor, initialLocation: MapLocation){
        this.id = id
        this.x = initialLocation.x
        this.y = initialLocation.y
        this.name = profile.name
        this.strength = profile.strength
    }

}