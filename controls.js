function keyPressed() { 
    if (!p.isPlummeting && (!isMenu || p.lives != 3) ) { // The player can only move if the game is not on Menu or End Screen and the player is not plummeting down a canyon
        if (keyCode == 65 || keyCode == 37) { // The player can move left using the LEFT key or A key.
            p.isLeft = true;
        }
        if (keyCode == 68 || keyCode == 39) { // The player can move right using the RIGHT key or D key.
            p.isRight = true;
        }
        if ((keyCode == 87 || keyCode == 38) && !p.isFalling && !p.isPlummeting) { // The player can only jump if they are not falling or plummeting using the UP key or W key. 
            p.yPos = p.yPos - 180; // The player jumps 180 pixels up
            if (!isMuted) { 
            jumpEffect.play(); // Plays the jump sound effect
        }
    }
    if (keyCode == 77) { // The player can mute the game using the M key
        isMuted = !isMuted; // Toggles the isMuted boolean
    }
    if (keyCode == 82 && (p.isWinner == true || p.isLoser) && stage == 3) { // The player can restart the game using the R key if they have won or lost the game. The player's stage, lives, score, and time are reset.
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

    if (keyCode == 65 || keyCode == 37) { // The player can stop moving left when they release the LEFT key or A key.
        p.isLeft = false;
    }
    if (keyCode == 68 || keyCode == 39) { // The player can stop moving right when they release the RIGHT key or D key.
        p.isRight = false;
    }
}
function mousePressed() { // The player can skip the Menu's instructions by clicking the mouse.
    isMenu = false;
    if (isMenu == true && isMuted == false && !lightInUs.isPlaying()) { // Plays the light in us song if the game is not muted and the song is not already playing. A click is required to play the song as per Chrome's autoplay policy.
        lightInUs.play(); 
    }
}
