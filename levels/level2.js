function setLevelTwo() {
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
        { x_pos: 50, y_pos: 400, width: 220 },
        { x_pos: 400, y_pos: 400, width: 140 },
        { x_pos: 600, y_pos: 400, width: 300 },
        { x_pos: 1100, y_pos: 400, width: 900 },]
    for (var i = 0; i < canyonArray.length; i++) {
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width));
    }
    platforms = [];
    var platformArray = [
        { x_pos: 100, y_pos:332, length: 100, updateRange: 70 },
        { x_pos: 100, y_pos: 250, length: 100, updateRange: 70 },
        { x_pos: 300, y_pos: 250, length: 100, updateRange: 100 },
        { x_pos: 350, y_pos: 150, length: 100, updateRange: 100 },
        { x_pos: 480, y_pos: 400, length: 50, updateRange: 100 },
        { x_pos: 600, y_pos: 400, length: 50, updateRange: 100 },
        { x_pos: 700, y_pos: 300, length: 150, updateRange: 100 },
        { x_pos: 900, y_pos: 300, length: 150, updateRange: 100 },
        { x_pos: 1100, y_pos: 200, length: 150, updateRange: 100 },]
    for (var i = 0; i < platformArray.length; i++) {
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange));
    }
    enemies = [];
    var enemyArray = [
        { x_pos: 200, y_pos: 400, range:150, speed:2 },
        { x_pos: -150, y_pos: 400, range: 300, speed: 1 },]
    for (var i = 0; i < enemyArray.length; i++) {
        enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed));
    }
    flagpoleLoc = { x_pos: 1230, y_pos: 196, isReached: false }
    flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached);
}