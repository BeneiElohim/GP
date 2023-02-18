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
}


function Star() {
  console.log("star");
}

function Tree() {
    console.log("tree");
}

// var mountains = new Mountain(400, 432, "#8B4513", "#FFD700");