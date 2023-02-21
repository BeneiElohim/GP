function Canyon(x,y,width){
    this.x = x;
    this.y = y;
    this.width = width;
    
    this.draw = function(){
    this.checkCanyon();
    fill(56, 0, 0);
    rect(this.x, floorPos_y, this.width + 30, 300);
    fill(94, 0, 0, 110);
    rect(this.x, floorPos_y, this.width + 20, 300);
    }
    this.checkCanyon = function(){
        if (p.xPos > this.x && p.xPos < this.x + this.width && p.yPos >= floorPos_y) {
            p.isPlummeting = true;
        }
    }
}