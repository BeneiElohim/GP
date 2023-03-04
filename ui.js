////MENU BOX /////
function MenuBox(width, height, textPx, color,textColor,font,xPos,yPos,text1 = "",text2 = "",text3 = "",text4= "") {
    this.width = width; //width of the menu
    this.height = height; //height of the menu
    this.textPx = textPx; //size of the text
    this.color = color; //background color of the menu
    this.textColor = textColor; //color of the text
    this.font = font; //font of the text
    this.xPos = xPos; //x position of the menu
    this.yPos = yPos; //y position of the menu
    this.text1 = text1; //text1,optional
    this.text2 = text2; //text2,optional
    this.text3 = text3; //text3,optional
    this.text4 = text4; //text4, optional

    //Menu Drawing Function
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
//MASCOT///
function Mascot(headColor, bodyColor, legColor,gcX,gcY, size) {
    this.headColor = headColor; //color of the head
    this.bodyColor = bodyColor; //color of the body
    this.legColor = legColor; //color of the legs
    this.gcX = gcX; //x position of the mascot
    this.gcY = gcY; //y position of the mascot
    this.size = size; //size of the mascot

    this.drawMascot = function() { //draws the mascot
        fill(this.headColor);
        ellipse(this.gcX+150, this.gcY-220, this.size);
        fill(this.bodyColor);
        rect(this.gcX + 140, this.gcY-210, this.size, this.size*2.5);
        fill(this.legColor);
        rect(this.gcX + 140, this.gcY -160, this.size * 0.4, this.size / 2);
        rect(this.gcX + 152, this.gcY -160, this.size * 0.4, this.size / 2);
    }
}
// FUNCTION TO DRAW LIFE SHAPES
function drawLife() {
    fill(255);
    noStroke();
    textSize(15);
    text("Lives: " + p.lives, 20, 40);
    if(p.lives >= 1){
    //red circle
    fill(255, 0, 0);
    ellipse(82, 35, 10);
    }
    if(p.lives >= 2){
    //green circle
    fill(0, 255, 0);
    ellipse(102, 35, 10);
    }
    if(p.lives >= 3){
    //blue circle
    fill(0, 0, 255);
    ellipse(122, 35, 10);
    }
}
// FUNCTION TO DRAW SCORE
function typeScore() {
    fill(255, 255, 255);
    noStroke();
    text("Score: " + p.score, 20, 20);
}
// FUNCTION TO DRAW THE MUTE BUTTON
function muteButton(){
    fill(255, 255, 255);
    noStroke();
    rect(5, 510, 30, 20);
    triangle(17,521,39,493,39,549);
    // Draw a red version the of the button if the game is muted
    if (isMuted == true) {
        fill(255, 0, 0);
        rect(5, 510, 30, 20);
        triangle(17, 521, 39, 493, 39, 549);
    }

}
// FUNCTION TO DRAW THE TIMER
function timer(){
    if (stage != 3 && !isMenu) { // if the game is not on Menu or End Screen
     milliseconds = frameCount % 60; //calculates the milliseconds.
   if (frameCount % 60 == 0 && !p.isPlummeting) { 
        seconds++; //calculates the seconds
    }
    if (frameCount % 3600 == 0 && !p.isPlummeting) { 
        minutes++; //calculates the minutes
        seconds = 0; //resets the seconds to 0 when the minutes increase
    }
    fill(255, 255, 255);  //white text to display the timer
    noStroke();
    textSize(15);
    text("Timer:" + minutes + ":" + seconds  + ":" + milliseconds, 930, 540);
    }
    //if the game is on the end screen, the timer stops and the time is saved
    if (stage == 3) {
        millisecondsEnd = milliseconds; 
        secondsEnd = seconds;
        minutesEnd = minutes;
        return;
    }
}