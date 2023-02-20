function Enemies(x,y,range){
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.inc = 1;
    base = 170;
    updateRange = 40;
    sizeRange = 10;
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
        noStroke();
        this.update();
        fill(8,3,56, base + random(-updateRange, updateRange)) // big outer circle
        ellipse(this.currentX, this.y, 45)
        fill(49, 26, 201, base + random(-updateRange, updateRange)) // big outer circle
        ellipse(this.currentX, this.y, 45);
        fill(119, 14, 202, base + random(-updateRange, updateRange)) // small inner circle
        ellipse(this.currentX, this.y, 22.5 + random(-sizeRange, sizeRange));
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