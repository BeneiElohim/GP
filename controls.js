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
            if (!isMuted) {
            jumpEffect.play();
        }
    }
    if (keyCode == 77) {
        isMuted = !isMuted;
    }
    if (keyCode == 82 && p.isWinner == true || keyCode == 82 && p.isLoser) {
        stage = 0;
        p.lives = 3;
        p.score = 0;
        seconds = 0;
        minutes = 0;
        milliseconds = 0;
        setup();
    }
}
}
function keyReleased() {

    if (keyCode == 65 || keyCode == 37) {
        p.isLeft = false;
    }
    if (keyCode == 68 || keyCode == 39) {
        p.isRight = false;
    }
}
function mousePressed() {
    isMenu = false;
    if (isMenu == true && isMuted == false && !lightInUs.isPlaying()) {
        lightInUs.play();
    }
}
