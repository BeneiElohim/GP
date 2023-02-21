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
            triangle(this.x+10, 14+this.y, 30+this.x, 14+this.y, 20+this.x, this.y ); //Top One Triangle
            fill(255,0,0);
            triangle(this.x, 30+this.y, 18+this.x, 30+this.y, 10+this.x, 14+this.y); //Bottom left
            fill(0,255,0);
            triangle(this.x + 20, 30+this.y, 40+this.x, 30+this.y, 30+this.x, 14+this.y); //Bottom Right  
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