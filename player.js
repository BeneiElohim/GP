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

    walkingLeft: function() {
        console.log("walking left");
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 16,this.yPos - 10, 8, 10);
        rect(this.xPos - 2, this.yPos - 10, 8, 10);
    },
    walkingRight: function() {
        console.log("walking right");
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 50);
        fill(60, 105, 225);
        rect(this.xPos - 4, this.yPos - 10, 8, 10);
        rect(this.xPos + 10, this.yPos - 10, 8, 10);
    },
    jumpingLeft: function() {
        console.log("jumping left");
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 16, this.yPos - 40, 8, 10);
        rect(this.xPos - 2, this.yPos - 40, 8, 10);

    },
    jumpingRight: function() {
        console.log("jumping right");
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 4, this.yPos - 40, 8, 10);
        rect(this.xPos + 10, this.yPos - 40, 8, 10);    
    },
    jumpingForward: function() {
        console.log("jumping forward");
        fill(200, 0, 10)
        ellipse(this.xPos, this.yPos - 70, 20, 20);
        fill(38, 104, 0);
        rect(this.xPos - 10, this.yPos - 60, 20, 30);
        fill(60, 105, 225);
        rect(this.xPos - 10, this.yPos - 30, 8, 10);
        rect(this.xPos + 2, this.yPos - 40, 8, 10);
    },
    standing: function() {
        console.log("standing");
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
    },
}