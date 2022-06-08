// for now not using a d.ts file
// sholuld these just be interfaces?
// we will find out

export interface MapLocation {
    x: number,
    y: number
}

export type Profile = {
    attackPoints: number,
    defensePoints: number
}

export type Actor = {
    name: string,
    profile: Profile,
    location: MapLocation,
    isInvincible?: boolean
}

export enum Goodness {
    Good, Evil, Neutral
}

export type Consumable = {
    name: string,
    location: MapLocation,
    poisonPoints: number,
    strengthPoints: number,
    goodness: Goodness,
    specialPower?: string
}