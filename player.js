var player = {
    name: "Roger Glubbie Blubbie", //Player's name, no effect on gameplay
    nickname: "RGB Boy", //Player's nickname, no effect on gameplay
    score: 0, // Player's score
    lives: 3, // Player's lives
    xPos: 0, // Player's x position
    yPos: 0, // Player's y position
    speed: 1, // Player's speed
    // Player Movement Booleans //
    isLeft: false, 
    isRight: false,
    isFalling: false,
    isPlummeting: false,
    // Player Game State Booleans //
    isDead: false,
    isWinner: false,
    isLoser: false,
    // PLAYER ANIMATION FUNCTIONS //
    walkingLeft: function() { // Player's walking left animation
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 16,this.yPos - 10, 8, 10);
        rect(this.xPos - 2, this.yPos - 10, 8, 10);
    },
    walkingRight: function() { // Player's walking right animation
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 4, this.yPos - 10, 8, 10);
        rect(this.xPos + 10, this.yPos - 10, 8, 10);
    },
    jumpingLeft: function() { // Player's jumping left animation
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 16, this.yPos - 40, 8, 10);
        rect(this.xPos - 2, this.yPos - 40, 8, 10);

    },
    jumpingRight: function() { // Player's jumping right animation
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 4, this.yPos - 40, 8, 10);
        rect(this.xPos + 10, this.yPos - 40, 8, 10);    
    },
    jumpingForward: function() { // Player's jumping forward animation
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 10, this.yPos - 30, 8, 10);
        rect(this.xPos + 2, this.yPos - 40, 8, 10);
    },
    standing: function() { // Player's standing animation
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 10, this.yPos - 10, 8, 10);
        rect(this.xPos + 2, this.yPos - 10, 8, 10);        
    },
    // Player Death Function  on falling off a canyon //
    checkDeath: function() {
            if (this.yPos > height) {
                --this.lives;
                if (this.lives > 0) {
                    startGame();
                }
                else {
                    this.isDead = true;
                }
            }
        },
    // PLAYER MOVEMENT ANIMATION FUNCTIONS //
    playerMovement: function() {
        strokeWeight(3);
        stroke(0);
        if (this.isLeft && this.isFalling) {
            this.jumpingLeft();
        }
        else if (this.isRight && this.isFalling) {
            this.jumpingRight();
        }
    
        else if (this.isLeft) {
            this.walkingLeft();
        }
        else if (this.isRight) {
            this.walkingRight();
        }
        else if (this.isFalling || this.isPlummeting) {
            this.jumpingForward();
        }
        else {
            this.standing();
        }
        ////// PLAYER MOVEMENT CONTROLS //////
        if (this.isLeft == true) {
        this.xPos -= 2 * this.speed; // Player moves left
        }
        //walking right
        if (this.isRight == true) {
        this.xPos += 2 * this.speed; // Player moves right
        }
        // Player platform collision check to stop falling
        if (this.yPos < floorPos_y) {
            var onPlatform = false;
            for (var i = 0; i < platforms.length; i++) {
                if (platforms[i].checkContact(this.xPos, this.yPos) == true) {
                    onPlatform = true;
                    break;
                }
            }
            if (onPlatform) { // Player is on a platform
                this.isFalling = false;
            } else {
                this.yPos += 2 ; // Player is falling and going down
                this.speed = 1.2;  // PLayer has higher speed when falling
                this.isFalling = true; // Player is falling
            }
        }        
    if (this.yPos >= floorPos_y) { // Player is on the floor
        this.isFalling = false; // Player is not falling
        this.speed = 1; // Player has normal speed
    }
    if (this.isPlummeting == true) { 
        this.yPos += 3 ; // Player is falling faster
    }
    },
}