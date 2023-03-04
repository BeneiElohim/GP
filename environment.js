let margin = 40; // margin for the random values, so each scene is slightly different
//Contructor for the mountain object
function Mountain(bcolor, tcolor) {
  this.bcolor = bcolor; // bottom color of the mountain
  this.tcolor = tcolor; // top color of the mountain, peak color
  let mountains = [{ x_pos: 400, y_pos: 432 }, // array of mountain objects, with xpos and ypos values, declared inside the constructor since they are static 
    { x_pos: 800 + random(-margin,margin), y_pos: 432 },
    { x_pos: 1300+ random(-margin,margin), y_pos: 432 },
    { x_pos: 2100 + random(-margin,margin), y_pos: 432 },
    { x_pos: -400 + random(-margin,margin), y_pos: 432 }]; 
  this.drawMountain = function() {
    for (let i = 0; i < mountains.length; i++) {
    noStroke();
    fill(this.bcolor); // bottom color of the mountain
    triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos + 300, mountains[i].y_pos, mountains[i].x_pos + 150, mountains[i].y_pos - 300);
    fill(this.tcolor); // top color of the mountain
    quad(mountains[i].x_pos + 150, mountains[i].y_pos - 300, mountains[i].x_pos + 110, mountains[i].y_pos - 220, mountains[i].x_pos + 150, mountains[i].y_pos - 210, mountains[i].x_pos + 180, mountains[i].y_pos - 240);
    }
  }
}
//Constructor for the cloud object
function Cloud() { 
  let clouds = 
  [{ x_pos: -300 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 }, // array of cloud objects, with xpos and ypos values, declared inside the constructor since they are static with random values
  { x_pos: -100 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: 200 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: 400 + random(-margin,margin), y_pos: 100 + random(-margin,margin), size: 50 },
  { x_pos: 600 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: 800 + random(-margin,margin), y_pos: 100 + random(-margin,margin), size: 50 },
  { x_pos: 1000 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: 1200 + random(-margin,margin), y_pos: 100 + random(-margin,margin), size: 50 },
  { x_pos: 1400 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: 1600 + random(-margin,margin), y_pos: 100 + random(-margin,margin), size: 50 },
  { x_pos: 1800 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: -500 + random(-margin,margin), y_pos: 100 + random(-margin,margin),  size: 50 },
  { x_pos: -700 + random(-margin,margin), y_pos: 150 + random(-margin,margin), size: 50 },
  { x_pos: -900 + random(-margin,margin), y_pos: 100 + random(-margin,margin), size: 50 },
  ] 
  this.drawCloud = function(){ // draw the cloud
    for (let i = 0; i<clouds.length; i++) { // loop through the array of cloud objects
      noStroke();
      fill(12,21,37,170);
      ellipse(clouds[i].x_pos - 39 , clouds[i].y_pos + 4, clouds[i].size);
      fill(65,97,112, 160);
      ellipse(clouds[i].x_pos - 25, clouds[i].y_pos - 30, clouds[i].size - 10);
      fill(39,65,82, 150);
      ellipse(clouds[i].x_pos, clouds[i].y_pos + 4, clouds[i].size + 10);
      fill(102,142,150, 160);
      ellipse(clouds[i].x_pos, clouds[i].y_pos - 30, clouds[i].size - 5);
    }
  }
}
//Constructor for the star object
function Star(glistening,score) { 
    this.glistening = glistening; // size of the star
  let stars = [{ x_pos: -50 + random(-margin,margin), y_pos: 60 } // array of star objects, with xpos and ypos values, declared inside the constructor since they are static
    , { x_pos: 0 + random(-margin,margin), y_pos: 50 }
    , { x_pos: 100 + random(-margin,margin), y_pos: 60 }
    , { x_pos: 200 + random(-margin,margin), y_pos: 60 }
    , { x_pos: 300 + random(-margin,margin), y_pos: 20 }
    , { x_pos: 400 + random(-margin,margin), y_pos: 70 }
    , { x_pos: 500 + random(-margin,margin), y_pos: 40 }
    , { x_pos: 600 + random(-margin,margin), y_pos: 70 }
    , { x_pos: 700 + random(-margin,margin), y_pos: 30 }
    , { x_pos: 800 + random(-margin,margin), y_pos: 60 }
    , { x_pos: 900 + random(-margin,margin), y_pos: 50 }
    , { x_pos: 1000 + random(-margin,margin), y_pos: 40 }
    , { x_pos: 1100 + random(-margin,margin), y_pos: 70 }
    , { x_pos: 1200 + random(-margin,margin), y_pos: 30 }
    , { x_pos: 1300 + random(-margin,margin), y_pos: 60 }
    , { x_pos: 1400 + random(-margin,margin), y_pos: 50 }
    , { x_pos: 1500 + random(-margin,margin), y_pos: 40 }] // array of star objects, with xpos and ypos values
    this.drawStar = function() {
    for (let i = 0; i < stars.length; i++) { // loop through the array of star objects
      noStroke();
      fill(255,255,255,255-score*30); // white that fades out as the score increases
      ellipse(stars[i].x_pos, stars[i].y_pos, random(0,this.glistening)); // draw the star with a glistening effect
    }
  }
}
//Constructor for the tree object
function Tree(floor) {
  this.floor = floor; // y position of the tree
  trees_x = [
    -100 + random(-margin,margin),
    -500 + random(-margin,margin),
    -300 + random(-margin,margin),
    300 + random(-margin,margin),
    500 + random(-margin,margin),
    900 + random(-margin,margin),
    1300 + random(-margin,margin),
    1700 + random(-margin,margin),
    2100 + random(-margin,margin)]; // array of x positions of the trees, with random values to make the trees appear in different places
  trees_y = floor-150; // y position of the trees
  this.drawTree= function() { // draw the tree
    for (let i = 0; i < trees_x.length; i++) { // loop through the array of x positions of the trees
    fill(min(14+p.score*4,90), min(2+p.score*2,40), min(p.score*2,20)); // brown that gets lighter as the score increases
    rect(trees_x[i], trees_y + 19, 50, 130);
    fill(0, min(p.score*10,190), 0); // green that gets lighter as the score increases
    triangle(trees_x[i] - 50, trees_y + 30, trees_x[i] + 30, trees_y - 136, trees_x[i] + 100, trees_y + 30);
    }
  }
}
//Constructor for the snowflake object
function Snowflake() {
  this.x = random(-300, 2500); // x position of the snowflake
  this.y = random(0, height); // y position of the snowflake 
  this.d = random(1, 5); // random direction of the snowflake
  this.drawSnowflake = function() {  // draw the snowflake
    this.fall(); // call the fall function to make the snowflake fall
    fill(255);
    ellipse(this.x, this.y, this.d); // draw the snowflake
  }
  this.fall = function() { // make the snowflake fall
    this.y = this.y + this.d; // increase the y position of the snowflake by the direction of the snowflake
    if (this.y > height) {  // if the snowflake reaches the bottom of the screen
      this.y = random(-200, -100); // reset the y position of the snowflake to a random value between -200 and -100
    }
  }
  
}
// Function to draw the floor
function drawFloors(score) { 
 floorHeight = height - floorPos_y; // height of the floor
 for (let i = -900; i < 3000; i+= 25) { // loop through the floor on X axis
  for (let j = 0; j < floorHeight; j+=12) { // loop through the floor on Y axis
    stroke(0);  // black
    strokeWeight(2); // thick
     fill(47+score*6,28+score*2,11); // brown that gets lighter as the score increases
     rect(i+j+15, floorPos_y + j, 40, 12); // draw the floor with a brick pattern
   }
 }
}
// Function to draw the sky and the sun/moon depending on the score
function drawSky(score){
background(min(30+score*6,170),min(30+score*6,170),min(30+score*12,255)); // sky that gets lighter as the score increases

if (score < 8 && score >= 4) { // if the score is between 4 and 8
  //draw the moon
  fill(255, 255, 255,140);
  ellipse(200, 100, 100, 100);
  //draw the half sun
  fill(255, 255, 0);
  ellipse(100, 432, 100, 100);
}
if (score < 4) { // if the score is less than 4
  //draw the moon
  fill(255, 255, 255);
  ellipse(200, 100, 100, 100);
}
if (score >= 8) { // if the score is greater than 8   
  //draw the sun
  fill(255, 255, 0);
  ellipse(100, 100, 100, 100);
}
}