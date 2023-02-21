function setLevelOne() {
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
        collectables.push(new Collectable(collectableArray[i].x_pos, collectableArray[i].y_pos,collectableArray[i].isFound))
    }
}