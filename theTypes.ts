// for now not using a d.ts file

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

export type GameElement = Obstacle | Potion