// CONTRUCTOR FUNCTION FOR THE CANYONS //
function Canyon(x,y,width){
    this.x = x;
    this.y = y;
    this.width = width;
    //draw the canyon to the screen with different width and locations
    this.draw = function(){ 
    this.checkCanyon(); //check if the player is in the canyon on the draw function
    fill(56, 0, 0);
    rect(this.x, floorPos_y, this.width + 30, 300);
    fill(94, 0, 0, 110);
    rect(this.x, floorPos_y, this.width + 20, 300);
    }
    //check if the player is in the canyon
    this.checkCanyon = function(){
        if (p.xPos > this.x && p.xPos < this.x + this.width && p.yPos >= floorPos_y) {
            p.isPlummeting = true;
        }
    }
}
// CONSTRUCTOR FUNCTION FOR THE COLLECTABLES //
function Collectable(x,y, isFound) {
    this.x = x;
    this.y = y;
    this.isFound = isFound; //isFound is a boolean value that is set to false by default, and is set to true when the player collects the collectable
    //draw the collectable to the screen
    this.draw = function() {
        if (!this.isFound) { //if the collectable is not found, draw it to the screen
            this.checkContact(); //check if the player is in contact with the collectable on the draw function
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
    this.checkContact = function() { //check if the player is in contact with the collectable
        let d = dist(p.xPos, p.yPos, this.x, this.y); //calculate the distance between the player and the collectable
        if (d < 50) { //if the distance is less than 50, set the collectable to found
            this.isFound = true; //set the collectable to found
            p.score += 1; //increase the player's score by 1
        }
    }
}
function Enemy(x,y,range, speed){
    this.x = x; //x position of the enemy
    this.y = y; //y position of the enemy
    this.range = range; //range of the enemy
    this.currentX = x; //current x position of the enemy
    this.speed = speed; //speed of the enemy
    this.inc = 1; //increment of speed to the enemy
    //parameters for the enemy color animations
    base = 170;
    updateRange = 40;
    sizeRange = 10;
    this.update = function(){ //update the enemy's position
        this.currentX += this.inc * this.speed; //update the enemy's x position in accordance to the increment
        if(this.currentX >= this.x + this.range){ //if the enemy's x position is greater than the range
            this.inc = -1 * this.speed; //set the increment to negative
        }
        else if (this.currentX < this.x){ //if the enemy's x position is less than the x position
            this.inc = 1 * this.speed; //set the increment to positive
        }
    },
    this.draw = function(){
        noStroke();
        this.update();
        fill(8,3,56, base + random(-updateRange, updateRange)) // big outer circle, with a random transparency for the animation
        ellipse(this.currentX, this.y, 45)
        fill(49, 26, 201, base + random(-updateRange, updateRange)) // big outer circle, with a random transparency for the animation
        ellipse(this.currentX, this.y, 45);
        fill(119, 14, 202, base + random(-updateRange, updateRange)) // small inner circle, with a random transparency for the animation
        ellipse(this.currentX, this.y, 22.5 + random(-sizeRange, sizeRange)); // the size of the circle is random, to create the animation
},
    this.checkContact = function(gc_x, gc_y){
        let d = dist(gc_x, gc_y, this.currentX, this.y); //calculate the distance between the player and the enemy
        if(d < 40){ //if the distance is less than 40, return true
            return true;
        }
        return false;
}
}
// CONSTRUCTOR FUNCTION FOR THE FLAG POLE //
function createPlatforms(x,y,length,updateRange){

    let update = 255; //update value for the color animation
    let p = { //create a platform object
        x: x, //x position of the platform
        y: y, //y position of the platform
        length: length, //length of the platform
        updateRange: updateRange, //range of the color animation
        draw: function(){
            stroke(255) //draw the outline of the platform
            strokeWeight(2); //set the stroke weight to 2
            fill(255,0,0,update + random(-updateRange,updateRange)); //set the fill color to red, with a random transparency for the animation
            rect(this.x, this.y, this.length/3, 20); //draw the first rectangle
            fill(0,255,0,update + random(-updateRange,updateRange)); //set the fill color to green, with a random transparency for the animation 
            rect(this.x+this.length/3, this.y, this.length/3, 20); //draw the second rectangle
            fill(0,0,255,update + random(-updateRange,updateRange) ); //set the fill color to blue, with a random transparency for the animation
            rect(this.x+this.length/3 * 2, this.y, this.length/3, 20); //draw the third rectangle
        },
        checkContact: function(gc_x, gc_y){ //check if the player is in contact with the platform
            if(gc_x > this.x && gc_x < this.x + this.length){ //if the player's x position is between the platform's x position and the platform's x position + the length of the platform
                let d = this.y - gc_y; //calculate the distance between the player and the platform
                if(d >= 0 && d < 10){ //if the distance is greater than 0 and less than 10, return true
                    return true;
                }
            }
        },
    }
    return p; //return the platform object
}
// CONSTRUCTOR FUNCTION FOR THE FLAGPOLE //
function Flagpole(x,y, isReached){ 
    this.x = x; //x position of the flagpole
    this.y = y; //y position of the flagpole
    this.isReached = isReached; //boolean value to check if the flagpole has been reached

    this.draw = function(){
        if(!this.isReached){ //if the flagpole has not been reached
        this.checkFlagpole(); //check if the flagpole has been reached
        }       
        push(); //push the current state of the canvas so that the flagpole can be drawn outside the screen
        strokeWeight(5); //set the stroke weight to 5
        stroke(100); //set the stroke color to gray
        line(this.x, this.y, this.x, this.y - 250);     //draw the flagpole
        noStroke(); //remove the stroke
        fill(255); //set the fill color to white
        rect(this.x, this.y - 250, 50, 50); //draw the flag

        //draw the triangle on the flag
        strokeWeight(5); //set the stroke weight to 5
        stroke(0); //set the stroke color to black
        fill(255); //set the fill color to white
        triangle(this.x + 2, 30+this.y - 240, 40+this.x + 2, 30+this.y - 240, 20+this.x + 2, 0+this.y - 240); //BG Triangle
        fill(0,0,255); 
        triangle(this.x + 2+10, 14+this.y - 240, 30+this.x + 2, 14+this.y - 240, 20+this.x + 2, this.y - 240 ); //Top One Triangle
        fill(255,0,0);
        triangle(this.x + 2, 30+this.y - 240, 18+this.x + 2, 30+this.y - 240, 10+this.x + 2, 14+this.y - 240); //Bottom left
        fill(0,255,0);
        triangle(this.x + 2 + 20, 30+this.y - 240, 40+this.x + 2, 30+this.y - 240, 30+this.x + 2, 14+this.y - 240); //Bottom Right  
        pop();
    }
    this.checkFlagpole = function(){ //check if the flagpole has been reached
        var d = abs(p.xPos - this.x);
        if (d < 15) {
        this.isReached = true;
        }
    }
}