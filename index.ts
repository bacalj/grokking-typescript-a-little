import { MapLocation } from './theTypes'

function setUpWorld(){
    // actually not doing this yet...
    // I like the sentiment of getting abstract fast
    // but lets skip to the syntax questions you have for the moment
}

function logLocation(location: MapLocation) {
    console.log(`player is at ${location.x}, ${location.y}`)
}

function run(){
    let theLocation = {x: 10, y: 5}
    logLocation(theLocation)
}

run()
