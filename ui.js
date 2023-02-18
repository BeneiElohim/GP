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
function Lives(liveCount,){



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