// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return blocks - 42
    }
    else if (blocks <= 42) {
        return 42 - blocks
    }
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264)
}

function distanceTravelledInFeet(beginning, end) {
    if (beginning >= end) {
        return (beginning - end) * 264
    } 
    else {
        return (end - beginning) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let cost; 

    switch(true) {
        case (distance <= 400):
            cost = 0
        break;

        case (distance > 400 && distance <= 2000):
            cost = ((distance - 400) * 0.02)
        break;

        case (distance > 2000 && distance <= 2500):
            cost = 25
        break;

        default:
            return "cannot travel that far"
    };
    
    return cost;

}