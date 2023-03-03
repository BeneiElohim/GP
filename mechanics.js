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
function Enemy(x,y,range, speed){
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.speed = speed;
    this.inc = 1;
    base = 170;
    updateRange = 40;
    sizeRange = 10;
    this.update = function(){
        this.currentX += this.inc * this.speed;
        if(this.currentX >= this.x + this.range){
            this.inc = -1 * this.speed;
        }
        else if (this.currentX < this.x){
            this.inc = 1 * this.speed;
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
        if(d < 40){
            console.log("contact on enemy");
            return true;
        }
        return false;
}
}
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
                if(d >= 0 && d < 10){
                    console.log("contact on pt");
                    return true;
                }
            }
        },
    }
    return p;
}
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
        fill(255);
        rect(this.x, this.y - 250, 50, 50);

        strokeWeight(5);
        stroke(0);
        fill(255);
        triangle(this.x + 2, 30+this.y - 240, 40+this.x + 2, 30+this.y - 240, 20+this.x + 2, 0+this.y - 240); //BG Triangle
        fill(0,0,255); 
        triangle(this.x + 2+10, 14+this.y - 240, 30+this.x + 2, 14+this.y - 240, 20+this.x + 2, this.y - 240 ); //Top One Triangle
        fill(255,0,0);
        triangle(this.x + 2, 30+this.y - 240, 18+this.x + 2, 30+this.y - 240, 10+this.x + 2, 14+this.y - 240); //Bottom left
        fill(0,255,0);
        triangle(this.x + 2 + 20, 30+this.y - 240, 40+this.x + 2, 30+this.y - 240, 30+this.x + 2, 14+this.y - 240); //Bottom Right  
        pop();
    }
    this.checkFlagpole = function(){
        var d = abs(p.xPos - this.x);
        if (d < 15) {
        this.isReached = true;
        }
    }
}