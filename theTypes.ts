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

export interface Actor {
    name: string,
    strength: number
}

export interface Potion {
    name: string,
    effect: number
}

export interface Obstacle {
    name: string,
    difficulty: number
}
