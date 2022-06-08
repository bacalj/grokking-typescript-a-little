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
