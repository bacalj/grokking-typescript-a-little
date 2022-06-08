// for now not using a d.ts file

type MapLocation = {
    x: number,
    y: number
}

type Profile = {
    attackPoints: number,
    defensePoints: number
}

type Actor = {
    name: string,
    profile: Profile,
    location: MapLocation
}

enum Goodness {
    Good, Evil, Neutral
}

type Consumable = {
    name: string,
    location: MapLocation,
    poisonPoints: number,
    strengthPoints: number,
    goodness: Goodness,
    specialPower?: string
}