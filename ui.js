//Declaring a constructor function for Welcome Menu
function MenuBox(width, height, textPx, color,textColor,font,xPos,yPos,text1 = "",text2 = "",text3 = "",text4= "") {
    this.width = width; //width of the menu
    this.height = height; //height of the menu
    this.textPx = textPx; //size of the text
    this.color = color; //background color of the menu
    this.textColor = textColor; //color of the text
    this.font = font; //font of the text
    this.xPos = xPos; //x position of the menu
    this.yPos = yPos; //y position of the menu
    this.text1 = text1; //text1
    this.text2 = text2; //text2
    this.text3 = text3; //text3
    this.text4 = text4; //text4

    this.drawMenu = function() {
        //Menu Box
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height); 
        //Menu Text
        fill(this.textColor);
        textSize(this.textPx);
        textFont(this.font);
        text(this.text1, 18 + width/2, 100+height/2);
        text(this.text2, 110 + width / 2, 120 + height / 2);
        text(this.text3, 110 + width / 2, 160 + height / 2);
        textSize(this.textPx * 0.6);
        text(this.text4, width/2, 220+height/2);
    }
}
function Lives(liveCount, xPos, yPos, textPx,size, colorText, colorLives1, colorLives2, colorLives3) {
    this.liveCount = liveCount;
    this.xPos = xPos;
    this.yPos = yPos;
    this.textPx = textPx;
    this.size = size;
    this.colorText = colorText;
    this.colorLives1 = colorLives1;
    this.colorLives2 = colorLives2;
    this.colorLives3 = colorLives3;
    
    this.drawLives = function(){
        fill(this.colorText);
        textSize(this.textPx);
        text("Lives: " + this.liveCount, this.xPos, this.yPos);
        if(this.liveCount >= 1){
            fill(this.colorLives1);
            ellipse(this.xPos + 62, this.yPos - 5, this.size);
        }
        if(this.liveCount >= 2){
            fill(this.colorLives2);
            ellipse(this.xPos + 82, this.yPos - 5, this.size);
        }
        if(this.liveCount >= 3){
            fill(this.colorLives3);
            ellipse(this.xPos + 102, this.yPos - 5, this.size);
        }
    }
    this.takeLife = function(){
        this.liveCount--;
    }
    this.endGame = function(){
        if(this.liveCount <= 0){
            fill(255, 255, 255);
            textSize(20);
            text("GAME OVER", 500, 300);
            text("Press space to continue.", 500, 350);
            return true;
        }
    }


}

function Mascot(headColor, bodyColor, legColor,gcX,gcY, size) {
    this.headColor = headColor;
    this.bodyColor = bodyColor;
    this.legColor = legColor;
    this.gcX = gcX;
    this.gcY = gcY;
    this.size = size;

    this.drawMascot = function() {
        fill(this.headColor);
        ellipse(this.gcX+150, this.gcY-220, this.size);
        fill(this.bodyColor);
        rect(this.gcX + 140, this.gcY-210, this.size, this.size*2.5);
        fill(this.legColor);
        rect(this.gcX + 140, this.gcY -160, this.size * 0.4, this.size / 2);
        rect(this.gcX + 152, this.gcY -160, this.size * 0.4, this.size / 2);
    }
}
function Score(score){
    this.score = score;
    this.drawScore = function(){
        fill(255);
        textSize(20);
        textFont("Arial");
        text("Score: " + this.score, 20, 30);
    }
}