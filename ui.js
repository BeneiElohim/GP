//Declaring a constructor function for Welcome Menu
function Welcome(width, height, textPx, color,textColor,font,xPos,yPos) {
    this.width = width; //width of the menu
    this.height = height; //height of the menu
    this.textPx = textPx; //size of the text
    this.color = color; //background color of the menu
    this.textColor = textColor; //color of the text
    this.font = font; //font of the text
    this.xPos = xPos; //x position of the menu
    this.yPos = yPos; //y position of the menu

    this.drawMenu = function() {
        //Menu Box
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height); 
        //Menu Text
        fill(this.textColor);
        textSize(this.textPx);
        textFont(this.font);
        text("Welcome to the adventures of Roger Grubbie Blubb!", 18 + width/2, 100+height/2);
        text("Use WASD to walk around.", 110 + width / 2, 120 + height / 2);
        text("Click to skip this.", 110 + width / 2, 160 + height / 2);
        textSize(this.textSize * 0.6);
        text("P.S: You can call it RGB Boy! :)", width/2, 220+height/2);

    }
}