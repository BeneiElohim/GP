function Enemies(x,y,range){
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.inc = 1;
    this.update = function(){
        this.currentX += this.inc;
        if(this.currentX >= this.x + this.range){
            this.inc = -1;
        }
        else if (this.currentX < this.x){
            this.inc = 1;
        }
    },
    this.draw = function(){
        this.update();
        fill(255,0,0);
        ellipse(this.currentX, this.y, 30, 30);
},
    this.checkContact = function(gc_x, gc_y){
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        if(d < 20){
            console.log("contact on enemy");
            return true;
        }
        return false;
}
}