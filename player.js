var player = {
    name: "Roger Glubbie Blubbie",
    nickname: "RGB Boy",
    score: 0,
    lives: 3,
    xPos: 0,
    yPos: 0,
    isLeft: false,
    isRight: false,
    isFalling: false,
    isPlummeting: false,
    speed: 1,
    walkingLeft: function() {
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 16,this.yPos - 10, 8, 10);
        rect(this.xPos - 2, this.yPos - 10, 8, 10);
    },
    walkingRight: function() {
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 4, this.yPos - 10, 8, 10);
        rect(this.xPos + 10, this.yPos - 10, 8, 10);
    },
    jumpingLeft: function() {
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 16, this.yPos - 40, 8, 10);
        rect(this.xPos - 2, this.yPos - 40, 8, 10);

    },
    jumpingRight: function() {
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 4, this.yPos - 40, 8, 10);
        rect(this.xPos + 10, this.yPos - 40, 8, 10);    
    },
    jumpingForward: function() {
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 10, this.yPos - 30, 8, 10);
        rect(this.xPos + 2, this.yPos - 40, 8, 10);
    },
    standing: function() {
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 10, this.yPos - 10, 8, 10);
        rect(this.xPos + 2, this.yPos - 10, 8, 10);        
    },
    checkDeath: function() {
            if (this.yPos > height) {
                --this.lives;
                if (this.lives > 0) {
                    startGame();
                }
            }
        },
    playerMovement: function() {
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
        //walking left
        if (this.isLeft == true) {
        this.xPos -= 2 * this.speed;
        }
        //walking right
        if (this.isRight == true) {
        this.xPos += 2 * this.speed;
        }
        if (this.yPos < floorPos_y) {
            var onPlatform = false;
            for (var i = 0; i < platforms.length; i++) {
                if (platforms[i].checkContact(this.xPos, this.yPos) == true) {
                    onPlatform = true;
                    break;
                }
            }
            if (onPlatform) {
                this.isFalling = false;
            } else {
                this.yPos += 2 * this.speed;
                this.isFalling = true;
            }
        }        
    if (this.yPos >= floorPos_y) {
        this.isFalling = false;
    }
    if (this.isPlummeting == true) {
        this.yPos += 3 * this.speed;
    }
    },
}