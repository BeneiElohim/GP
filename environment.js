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
      fill(255, 255, 255, 170);
      ellipse(clouds[i].x_pos - 39, clouds[i].y_pos + 4, clouds[i].size);
      fill(255, 255, 255, 160);
      ellipse(clouds[i].x_pos - 25, clouds[i].y_pos - 30, clouds[i].size - 10);
      fill(255, 255, 255, 150);
      ellipse(clouds[i].x_pos, clouds[i].y_pos + 4, clouds[i].size + 10);
      fill(255, 255, 255, 160);
      ellipse(clouds[i].x_pos, clouds[i].y_pos - 30, clouds[i].size - 5);
  }
}
}
function Star(glistening) {
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
      fill(255);
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
    fill(90, 40, 19);
    rect(trees_x[i], treePos_y + 19, 50, 130);
    fill(0, 101, 0);
    triangle(trees_x[i] - 50, treePos_y + 30, trees_x[i] + 30, treePos_y - 136, trees_x[i] + 100, treePos_y + 30);
    }
  }
}