function setLevelFive(){
    collectables = []
    var collectableArray = [
        { x_pos: 400, y_pos: 400, isFound: false },
        { x_pos: 800, y_pos: 400, isFound: false },
        { x_pos: 1200, y_pos: 400,isFound: false },
        { x_pos: 1600, y_pos: 400,isFound: false },
        { x_pos: 2000, y_pos: 400,isFound: false },
        { x_pos: 2400, y_pos: 400,isFound: false },
        { x_pos: 2800, y_pos: 400,isFound: false },
        { x_pos: -400, y_pos: 400,isFound: false },
        { x_pos: -800, y_pos: 400,isFound: false },
        { x_pos: -1200, y_pos: 400,isFound: false },
        { x_pos: -1600, y_pos: 400,isFound: false },]
    for (var i = 0; i < collectableArray.length; i++) {
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound));
    }
    canyons = []
    var canyonArray  = [
        { x_pos: 98, y_pos: 400, width: 60 },
        { x_pos: 598, y_pos: 400, width: 110 },
        { x_pos: 1098, y_pos: 400, width: 65 },
        { x_pos: 1598, y_pos: 400, width: 14 },
        { x_pos: 2098, y_pos: 400, width: 70 },]
    for (var i = 0; i < canyonArray.length; i++) {
        canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width));
    }
    platforms = [];
    var platformArray = [
        { x_pos: 100, y_pos:332, length: 100, updateRange: 255 }]
    for (var i = 0; i < platformArray.length; i++) {
        platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange));
    }
    flagpole = [];
    flagpoleArray= [{ x_pos: 1800, y_pos: floorPos_y, isReached: false }]
    for (var i = 0; i < flagpoleArray.length; i++) {
        flagpole.push(new Flagpole(flagpoleArray[i].x_pos, flagpoleArray[i].y_pos, flagpoleArray[i].isReached));
    }
}