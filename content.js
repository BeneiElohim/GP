function renderFlagpole() {
    push();
    strokeWeight(5);
    stroke(100);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    noStroke();
    fill(255, 0, 0);
    if (flagpole.isReached) {
        rect(flagpole.x_pos, floorPos_y - 250, 50, 50);
    }
    else {
        rect(flagpole.x_pos, floorPos_y - 50, 50, 50);
    }
    pop();
}
function checkFlagpole() {
    var d = abs(p.xPos - flagpole.x_pos);
    if (d < 15) {
        flagpole.isReached = true;
    }
}