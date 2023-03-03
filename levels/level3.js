function setLevelThree(){
    collectables = []
    var collectableArray = [
        { x_pos: 400, y_pos: 400, isFound: false },
        { x_pos: 800, y_pos: 240, isFound: false },
        { x_pos: 1200, y_pos: 320,isFound: false },
        { x_pos: 500, y_pos: 170, isFound: false },
        { x_pos: 300, y_pos: 130,isFound: false },
        { x_pos: 330, y_pos: 130,isFound: false },
        { x_pos: 360, y_pos: 130,isFound: false },]
    for (var i = 0; i < collectableArray.length; i++) {
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound));
    }
    canyons = []
    var canyonArray  = [
        { x_pos: 450, y_pos: 400, width: 600 },]
    for (var i = 0; i < canyonArray.length; i++) {
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width));
    }
    platforms = [];
    var platformArray = [
        { x_pos: 500, y_pos:380, length: 100, updateRange:0},
        { x_pos: 700, y_pos:320, length: 100, updateRange:0},
        { x_pos: 900, y_pos:260, length: 100, updateRange:0},
        { x_pos: 700, y_pos:240, length: 100, updateRange:0},
        { x_pos: 1100, y_pos:320, length: 100, updateRange:0},
        { x_pos: 500, y_pos:210, length: 100, updateRange:0},
        { x_pos: 300, y_pos:170, length: 100, updateRange:0},
    ]
    for (var i = 0; i < platformArray.length; i++) {
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange));
    }
    enemies = [];
    var enemyArray = [
        { x_pos: -150, y_pos: 400, range:2000, speed:1 },]
    for (var i = 0; i < enemyArray.length; i++) {
        enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed));
    }
    flagpoleLoc = { x_pos: 1800, y_pos: floorPos_y, isReached: false }
    flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached);
}