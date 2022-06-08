// for now not using a d.ts file
// sholuld these just be interfaces?
// we will find out

// making this an interface because going to hardcode values in
// rather than populate a new object instance? I think?
// no actually making interfaces then going to make classes that 
// draw from these interfaces

export interface MapLocation {
    x: number,
    y: number
}

export interface BattleProfile {
    attackPoints: number,
    defensePoints: number
}

export interface Actor {
    name: string,
    profile: BattleProfile,
    location: MapLocation
}

export interface Potion {
    name: string,
    location: MapLocation,
    poisonPoints: number,
    strengthPoints: number,
}

export interface Obstacle {
    name: string,
    difficulty: number
}
