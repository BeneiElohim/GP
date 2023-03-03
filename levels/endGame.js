function setLevelFour(){
    console.log("level 4");
        collectables = []
        var collectableArray = []
        for (var i = 0; i < collectableArray.length; i++) {
            collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound));
        }
        canyons = []
        var canyonArray  = []
        for (var i = 0; i < canyonArray.length; i++) {
            canyons.push(new Canyon(canyonArray[i].x_pos, canyonArray[i].y_pos, canyonArray[i].width));
        }
        platforms = [];
        var platformArray = [
        ]
        for (var i = 0; i < platformArray.length; i++) {
            platforms.push(createPlatforms(platformArray[i].x_pos, platformArray[i].y_pos, platformArray[i].length, platformArray[i].updateRange));
        }
        enemies = [];
        var enemyArray = []
        for (var i = 0; i < enemyArray.length; i++) {
            enemies.push(new Enemy(enemyArray[i].x_pos, enemyArray[i].y_pos, enemyArray[i].range, enemyArray[i].speed));
        }
        flagpoleLoc = { x_pos: 1800, y_pos: floorPos_y, isReached: false }
        flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached);
        if (p.lives > 0) {
            p.isWinner = true;
            p.isLoser = false;
        }
        if (p.lives == 0) {
         p.isLoser = true;
         p.isWinner = false;
        }
        
}