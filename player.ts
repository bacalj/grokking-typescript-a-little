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

    lateralMove(changeX: number){
        this.x = this.x + changeX
    }

    verticalMove(changeY: number){
        this.y = this.y + changeY
    }

    powerChange(powerValue: number){
        this.strength = this.strength + powerValue
    }

    logStatus(){
        console.log(this)
    }
}