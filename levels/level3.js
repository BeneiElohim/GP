function setLevelThree(){
    collectables = [] // Empty the array of collectables

    // ARRAY OF COLLECTABLES - each collectable is an object with x and y positions and a boolean to indicate if it has been found //
    let collectableArray = [ 
        { x_pos: 400, y_pos: 400, isFound: false },
        { x_pos: 800, y_pos: 240, isFound: false },
        { x_pos: 1200, y_pos: 320,isFound: false },
        { x_pos: 500, y_pos: 170, isFound: false },
        { x_pos: 300, y_pos: 130,isFound: false },
        { x_pos: 330, y_pos: 130,isFound: false },
        { x_pos: 360, y_pos: 130,isFound: false },]
    for (let i = 0; i < collectableArray.length; i++) { // Loop through the array of collectables
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound)); // Create a new collectable object and populate the array
    }
    canyons = [] // Empty the array of canyons
    let canyonArray  = [ 
        { x_pos: 450, y_pos: 400, width: 600 },] // Array of canyon objects
    for (let i = 0; i < canyonArray.length; i++) { // Loop through the array of canyons
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width)); // Create a new canyon object and populate the array
    }
    platforms = []; // Empty the array of platforms
    let platformArray = [ 
        { x_pos: 500, y_pos:380, length: 100, updateRange:0},
        { x_pos: 700, y_pos:320, length: 100, updateRange:0},
        { x_pos: 900, y_pos:260, length: 100, updateRange:0},
        { x_pos: 700, y_pos:240, length: 100, updateRange:0},
        { x_pos: 1100, y_pos:320, length: 100, updateRange:0},
        { x_pos: 500, y_pos:210, length: 100, updateRange:0},
        { x_pos: 300, y_pos:170, length: 100, updateRange:0},
    ] // Array of platform objects
    for (let i = 0; i < platformArray.length; i++) {
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange)); // Create a new platform object and populate the array
    }
    enemies = []; // Empty the array of enemies 
    let enemyArray = [
        { x_pos: -150, y_pos: 400, range:2000, speed:1 },] // Array of enemy objects
    for (let i = 0; i < enemyArray.length; i++) {
        enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed)); // Create a new enemy object and populate the array
    }
    flagpoleLoc = { x_pos: 1800, y_pos: floorPos_y, isReached: false } // Flagpole location
    flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached); // Create a new flagpole object
}