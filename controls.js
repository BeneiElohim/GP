function keyPressed() {
    /*If statements to control the characters movement. Should be disable during plummet & log-in menu */
    if (!isPlummeting && (!isMenu || lives != 3) ) {
        if (keyCode == 65) {
            isLeft = true;
        }
        if (keyCode == 68) {
            isRight = true;
        }
        if (keyCode == 87 && !isFalling && !isPlummeting) {
            gameChar_y = gameChar_y - 300;
        }
    }
}
function keyReleased() {
    // if statements to control the animation of the character when
    // keys are released.
    if (keyCode == 65) {
        isLeft = false;
    }
    if (keyCode == 68) {
        isRight = false;
    }
}
function mousePressed() {
    //if mouse is pressed, the menu will disappear
    isMenu = false;
}