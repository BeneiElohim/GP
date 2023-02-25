//Contructor for the mountain object
function Mountain(bcolor, tcolor) {
  this.bcolor = bcolor; // bottom color of the mountain
  this.tcolor = tcolor; // top color of the mountain, peak color
  var mountains = [{ x_pos: 400, y_pos: 432 },
    { x_pos: 800, y_pos: 432 },
    { x_pos: 1300, y_pos: 432 },
    { x_pos: 2100, y_pos: 432 },
    { x_pos: -400, y_pos: 432 }]; // array of mountain objects, with xpos and ypos values
  this.drawMountain = function() {
    for (var i = 0; i < mountains.length; i++) {
    noStroke();
    fill(this.bcolor); // bottom color of the mountain
    triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos + 300, mountains[i].y_pos, mountains[i].x_pos + 150, mountains[i].y_pos - 300);
    fill(this.tcolor); // top color of the mountain
    quad(mountains[i].x_pos + 150, mountains[i].y_pos - 300, mountains[i].x_pos + 110, mountains[i].y_pos - 220, mountains[i].x_pos + 150, mountains[i].y_pos - 210, mountains[i].x_pos + 180, mountains[i].y_pos - 240);
    }
  }
}
function Cloud() {
  var clouds =
  [{ x_pos: -300, y_pos: 150, size: 50 },
  { x_pos: -100, y_pos: 150, size: 50 },
  { x_pos: 200, y_pos: 150, size: 50 },
  { x_pos: 400, y_pos: 100, size: 50 },
  { x_pos: 600, y_pos: 150, size: 50 },
  { x_pos: 800, y_pos: 100, size: 50 },
  { x_pos: 1000, y_pos: 150, size: 50 },
  { x_pos: 1200, y_pos: 100, size: 50 },
  { x_pos: 1400, y_pos: 150, size: 50 },
  { x_pos: 1600, y_pos: 100, size: 50 },
  { x_pos: 1800, y_pos: 150, size: 50 },
  { x_pos: -500, y_pos: 100, size: 50 },
  { x_pos: -700, y_pos: 150, size: 50 },
  { x_pos: -900, y_pos: 100, size: 50 },
  ] // array of cloud objects, with xpos and ypos values
  this.drawCloud = function() {
    for (var i = 0; i<clouds.length; i++) {
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
function Star(glistening,score) {
    this.glistening = glistening; // size of the star
  var stars = [{ x_pos: -50, y_pos: 60 }
    , { x_pos: 0, y_pos: 50 }
    , { x_pos: 100, y_pos: 60 }
    , { x_pos: 200, y_pos: 60 }
    , { x_pos: 300, y_pos: 20 }
    , { x_pos: 400, y_pos: 70 }
    , { x_pos: 500, y_pos: 40 }
    , { x_pos: 600, y_pos: 70 }
    , { x_pos: 700, y_pos: 30 }
    , { x_pos: 800, y_pos: 60 }
    , { x_pos: 900, y_pos: 50 }
    , { x_pos: 1000, y_pos: 40 }
    , { x_pos: 1100, y_pos: 70 }
    , { x_pos: 1200, y_pos: 30 }
    , { x_pos: 1300, y_pos: 60 }
    , { x_pos: 1400, y_pos: 50 }
    , { x_pos: 1500, y_pos: 40 }] // array of star objects, with xpos and ypos values
    this.drawStar = function() {
    for (var i = 0; i < stars.length; i++) {
      noStroke();
      fill(255,255,255,255-score*30);
      ellipse(stars[i].x_pos, stars[i].y_pos, random(0,this.glistening));
    }
  }
}
function Tree(floor) {
  this.floor = floor; // y position of the tree
  trees_x = [-1100, -800, -200, -300, 300, 500, 900, 1300, 1700, 2100];
  trees_y = floor-150;
  this.drawTree= function() {
    for (var i = 0; i < trees_x.length; i++) {
    fill(min(14+p.score*4,90), min(2+p.score*2,40), min(p.score*2,20));
    rect(trees_x[i], trees_y + 19, 50, 130);
    fill(0, min(p.score*10,190), 0);
    triangle(trees_x[i] - 50, trees_y + 30, trees_x[i] + 30, trees_y - 136, trees_x[i] + 100, trees_y + 30);
    }
  }
}
function Snowflake() {
  this.x = random(-300, 2500);
  this.y = random(0, height);
  this.d = random(1, 5);
  this.drawSnowflake = function() {
    this.fall();
    fill(255);
    ellipse(this.x, this.y, this.d);
  }
  this.fall = function() {
    this.y = this.y + this.d;
    if (this.y > height) {
      this.y = random(-200, -100);
    }
  }
  
}
function drawFloors(score) {
 floorHeight = height - floorPos_y;
 for (var i = -900; i < 3000; i+= 25) {
  for (var j = 0; j < floorHeight; j+=12) {
    stroke(0);
    strokeWeight(2);
     fill(47+score*6,28+score*2,11);
     rect(i+j+15, floorPos_y + j, 40, 12);
   }
 }
}
/* function drawBackground() {
  //draw the sky with a gradient
  for (var i = 0; i < height; i++) {
    var inter = map(i, 0, height, 0, 1);
    var c = lerpColor(color(0, 0, 0), color(0, 0, 255), inter);
    stroke(c);
    line(0, i, width, i);
  }
  //draw the sun
  fill(255, 255, 0);
  ellipse(100, 100, 100, 100);
  //draw the moon
  fill(255, 255, 255);
  ellipse(200, 100, 100, 100);
} */
function drawSky(score){
background(min(30+score*6,170),min(30+score*6,170),min(30+score*12,255));

if (score < 8 && score >= 4) {
  //draw the moon
  fill(255, 255, 255,140);
  ellipse(200, 100, 100, 100);
  //draw the half sun
  fill(255, 255, 0);
  ellipse(100, 432, 100, 100);
}
if (score < 4) {
  fill(255, 255, 255);
  ellipse(200, 100, 100, 100);
}
if (score >= 8) {
  //draw the sun
  fill(255, 255, 0);
  ellipse(100, 100, 100, 100);
}
}