function setLevelFive(){
    collectables = []
    var collectableArray = [
        { x_pos: 400, y_pos: 400, isFound: false },
        { x_pos: 800, y_pos: 400, isFound: false },
        { x_pos: 1200, y_pos: 400,isFound: false },
        { x_pos: 1600, y_pos: 400,isFound: false },]
    for (var i = 0; i < collectableArray.length; i++) {
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound));
    }
    canyons = []
    var canyonArray  = [
        { x_pos: 98, y_pos: 400, width: 60 },
        { x_pos: 598, y_pos: 400, width: 110 },
        { x_pos: 1098, y_pos: 400, width: 80 },
        { x_pos: 1398, y_pos: 400, width: 110 },]
    for (var i = 0; i < canyonArray.length; i++) {
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width));
    }
    platforms = [];
    var platformArray = [
        { x_pos: 100, y_pos:332, length: 100, updateRange: 70 },
        { x_pos: 260, y_pos: 250, length: 100, updateRange: 70 },
        { x_pos: 400, y_pos: 250, length: 100, updateRange: 100 },
        { x_pos: 508, y_pos: 332, length: 100, updateRange: 100 },
        { x_pos: 1250, y_pos: 300, length: 300, updateRange: 100 },]
    for (var i = 0; i < platformArray.length; i++) {
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange));
    }
    enemies = [];
    var enemyArray = [
        { x_pos: 200, y_pos: 400, range:100, speed:2 },
        { x_pos: 800, y_pos: 400, range:100, speed:2 },
        { x_pos: 1220, y_pos: 300, range:250, speed:2 },]
    for (var i = 0; i < enemyArray.length; i++) {
        enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed));
    }
    flagpoleLoc = { x_pos: 1800, y_pos: floorPos_y, isReached: false }
    flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached);
}