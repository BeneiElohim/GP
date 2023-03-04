function setLevelTwo() {
    collectables = [] // Empty the array of collectables
    // ARRAY OF COLLECTABLES - each collectable is an object with x and y positions and a boolean to indicate if it has been found //
    let collectableArray = [
        { x_pos: 188, y_pos: 300, isFound: false },
        { x_pos: 326, y_pos: 220, isFound: false },
        { x_pos: 482, y_pos: 126,isFound: false },
        { x_pos: 482, y_pos: 176,isFound: false },
        { x_pos: 540, y_pos: 226,isFound: false },
        { x_pos: 462, y_pos: 276,isFound: false },
        { x_pos: 390, y_pos: 400,isFound: false },
        { x_pos: 616, y_pos: 356,isFound: false },
        { x_pos: 996, y_pos: 266,isFound: false },
        { x_pos: 1056, y_pos: 400,isFound: false },]
    for (let i = 0; i < collectableArray.length; i++) { // Loop through the array of collectables
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound)); // Create a new collectable object and add it to the array
    }
    canyons = []
    let canyonArray  = [
        { x_pos: 50, y_pos: 400, width: 220 },
        { x_pos: 400, y_pos: 400, width: 140 },
        { x_pos: 600, y_pos: 400, width: 300 },
        { x_pos: 1100, y_pos: 400, width: 900 },] // Array of canyon objects
    for (let i = 0; i < canyonArray.length; i++) { // Loop through the array of canyon objects
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width)); // Create a new canyon object and add it to the array
    }
    platforms = []; // Empty the array of platforms
    let platformArray = [ // Array of platform objects
        { x_pos: 100, y_pos:332, length: 100, updateRange: 70 },
        { x_pos: 100, y_pos: 250, length: 100, updateRange: 70 },
        { x_pos: 300, y_pos: 250, length: 100, updateRange: 100 },
        { x_pos: 350, y_pos: 150, length: 100, updateRange: 100 },
        { x_pos: 480, y_pos: 400, length: 50, updateRange: 100 },
        { x_pos: 600, y_pos: 400, length: 50, updateRange: 100 },
        { x_pos: 700, y_pos: 300, length: 150, updateRange: 100 },
        { x_pos: 900, y_pos: 300, length: 150, updateRange: 100 },
        { x_pos: 1100, y_pos: 200, length: 150, updateRange: 100 },] 
    for (let i = 0; i < platformArray.length; i++) { // Loop through the array of platform objects
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange)); // Create a new platform object and add it to the array
    }
    enemies = []; // Empty the array of enemies
    let enemyArray = [ // Array of enemy objects
        { x_pos: -150, y_pos: 400, range: 300, speed: 1 },]
    for (let i = 0; i < enemyArray.length; i++) {
        enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed)); // Create a new enemy object and add it to the array
    }
    flagpoleLoc = { x_pos: 1230, y_pos: 196, isReached: false } // Flagpole location
    flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached); // Create a new flagpole object
}