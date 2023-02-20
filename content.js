function drawCollectable(t_collectable) {
    //draw collectable
    if (!t_collectable.isFound) {
        noStroke();
        fill(204, 55, 51);
        circle(t_collectable.x_pos + 6, t_collectable.y_pos + 10, t_collectable.size + 10);
        fill(0, 110, 0);
        ellipse(t_collectable.x_pos - 10, t_collectable.y_pos - 15, 10, t_collectable.size - 10);
        strokeWeight(5);
        stroke(41, 0, 0);
        line(t_collectable.x_pos + 6, t_collectable.y_pos, t_collectable.x_pos + 7, t_collectable.y_pos - 20);
    }
}
function drawCanyon(t_canyon) {
    //draw canyon
    fill(56, 0, 0);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width + 30, 300);
    fill(94, 0, 0, 110);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width + 20, 300);
}
function checkCollectable(t_collectable) {
    //check if collectable is found
    var d = dist(p.xPos, p.yPos, t_collectable.x_pos, t_collectable.y_pos);
    if (d < 50) {
        t_collectable.isFound = true;
        p.score += 1;
    }
}
function checkCanyon(t_canyon) {
    //check if character is over a canyon
    if (p.xPos > t_canyon.x_pos && p.xPos < t_canyon.x_pos + t_canyon.width && p.yPos >= floorPos_y) {
        p.isPlummeting = true;
    }
}
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
function checkPlayerDie() {
    if (p.yPos > height) {
        --lives;
        if (lives > 0) {
            startGame();
        }
    }

}