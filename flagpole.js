function Flagpole(x,y, isReached){
    this.x = x;
    this.y = y;
    this.isReached = isReached;

    this.draw = function(){
        if(!this.isReached){
        this.checkFlagpole();
        }
        push();
        strokeWeight(5);
        stroke(100);
        line(this.x, this.y, this.x, this.y - 250);
        noStroke();
        fill(255, 0, 0);
        if (this.isReached) {
            rect(this.x, this.y - 250, 50, 50);
        }
        else {
            rect(this.x, this.y - 50, 50, 50);
        }
        pop();
    }
    this.checkFlagpole = function(){
        var d = abs(p.xPos - flagpole.x_pos);
        if (d < 15) {
        flagpole.isReached = true;
        }
    }
}