function createPlatforms(x,y,length,updateRange){
    var update = 255;
    var p = {
        x: x,
        y: y,
        length: length,
        updateRange: updateRange,
        draw: function(){
            stroke(255)
            strokeWeight(2);
            fill(255,0,0,update + random(-updateRange,updateRange));
            rect(this.x, this.y, this.length/3, 20);
            fill(0,255,0,update + random(-updateRange,updateRange));
            rect(this.x+this.length/3, this.y, this.length/3, 20);
            fill(0,0,255,update + random(-updateRange,updateRange) );
            rect(this.x+this.length/3 * 2, this.y, this.length/3, 20);
        },
        checkContact: function(gc_x, gc_y){
            if(gc_x > this.x && gc_x < this.x + this.length){
                var d = this.y - gc_y;
                if(d >= 0 && d < 5){
                    console.log("contact on pt");
                    return true;
                }
            }
        },
    }
    return p;
}