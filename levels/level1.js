function setLevelOne() {
    collectables = [] // Empty the array of collectables
    var collectableArray = [ 
        { x_pos: -143, y_pos: 220, isFound: false },
        { x_pos: 400, y_pos: 400, isFound: false },
        { x_pos: 800, y_pos: 400, isFound: false },
        { x_pos: 1200, y_pos: 400,isFound: false },
        { x_pos: 1600, y_pos: 400,isFound: false },] // Array of collectable objects
    for (var i = 0; i < collectableArray.length; i++) {
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound)); // Create a new collectable object and populate the array
    } 
    canyons = [] // Empty the array of canyons
    var canyonArray  = [
        { x_pos: 98, y_pos: 400, width: 60 },
        { x_pos: 598, y_pos: 400, width: 110 },
        { x_pos: 1098, y_pos: 400, width: 80 },
        { x_pos: 1398, y_pos: 400, width: 110 },] // Array of canyon objects
    for (var i = 0; i < canyonArray.length; i++) {
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width)); // Create a new canyon object and populate the array
    }
    platforms = []; // Empty the array of platforms
    var platformArray = [ 
        { x_pos: 100, y_pos:332, length: 100, updateRange: 70 },
        { x_pos: 260, y_pos: 250, length: 100, updateRange: 70 },
        { x_pos: 400, y_pos: 250, length: 100, updateRange: 100 },
        { x_pos: 508, y_pos: 332, length: 100, updateRange: 100 },
        { x_pos: 1250, y_pos: 300, length: 300, updateRange: 100 },] // Array of platform objects
    for (var i = 0; i < platformArray.length; i++) {
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange)); // Create a new platform object and populate the array
    }
    enemies = []; // Empty the array of enemies
    var enemyArray = [
        { x_pos: 200, y_pos: 400, range:300, speed:1.5 },
        { x_pos: 1220, y_pos: 300, range:250, speed:2 },] // Array of enemy objects
    for (var i = 0; i < enemyArray.length; i++) {
        enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed)); // Create a new enemy object and populate the array
    }
    flagpoleLoc = { x_pos: 1800, y_pos: floorPos_y, isReached: false } // Flagpole object
    flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached); // Create a new flagpole object

}