function Collectable(x,y, isFound) {
    this.x = x;
    this.y = y;
    this.isFound = isFound;
    
    this.draw = function() {
        if (!this.isFound) {
            this.checkContact();
            fill(255);
            triangle(this.x, 30+this.y, 40+this.x, 30+this.y, 20+this.x, 0+this.y); //BG Triangle
            fill(0,0,255); 
            triangle(78+this.x, 30+this.y, 122+this.x, 30+this.y, 100+this.x, 0+this.y); //Top One Triangle
            fill(255,0,0);
            triangle(this.x, 30+this.y, 20+this.x, 30+this.y, 10+this.x, 40+this.y); //Bottom left
            fill(0,255,0,170);
            triangle(140+this.x, 54+this.y, 118+this.x, 80+this.y, 160+this.x, 80+this.y); //Bottom Right  
        }
    }
    this.checkContact = function() {
        var d = dist(p.xPos, p.yPos, this.x, this.y);
        if (d < 50) {
            this.isFound = true;
            p.score += 1;
        }
    }
}