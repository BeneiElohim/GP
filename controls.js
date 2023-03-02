function keyPressed() {
    /*If statements to control the characters movement. Should be disable during plummet & log-in menu */
    if (!p.isPlummeting && (!isMenu || p.lives != 3) ) {
        if (keyCode == 65 || keyCode == 37) {
            p.isLeft = true;
        }
        if (keyCode == 68 || keyCode == 39) {
            p.isRight = true;
        }
        if ((keyCode == 87 || keyCode == 38) && !p.isFalling && !p.isPlummeting) {
            p.yPos = p.yPos - 180;
        }
    }
    console.log("key pressed" + keyCode);
}
function keyReleased() {
    // if statements to control the animation of the character when
    // keys are released.
    if (keyCode == 65 || keyCode == 37) {
        p.isLeft = false;
    }
    if (keyCode == 68 || keyCode == 39) {
        p.isRight = false;
    }
}
function mousePressed() {
    //if mouse is pressed, the menu will disappear
    isMenu = false;
}
