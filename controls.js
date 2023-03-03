function keyPressed() {

    if (!p.isPlummeting && (!isMenu || p.lives != 3) ) {
        if (keyCode == 65 || keyCode == 37) {
            p.isLeft = true;
        }
        if (keyCode == 68 || keyCode == 39) {
            p.isRight = true;
        }
        if ((keyCode == 87 || keyCode == 38) && !p.isFalling && !p.isPlummeting) {
            p.yPos = p.yPos - 180;
            jumpEffect.play();
        }
    }
    if (keyCode == 77) {
        isMuted = !isMuted;
    }
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
    if (isMenu == true && isMuted == false && !lightInUs.isPlaying()) {
        lightInUs.play();
    }
}
