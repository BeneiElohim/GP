//Game Character Positions
var gameChar_x;
var gameChar_y;
var floorPos_y;
//Bools for controling the animation of the character.
var isLeft;
var isRight;
var isPlummeting;
var isFalling;
//Bool for the welcome menu
var isMenu;
//variable for the scenery
var trees_x;
var treePos_y;
var stars;
//Camera
var cameraPosX;
//Game Score
var game_score;
//Flagpole for game end
var flagpole;
//Lives variable
var lives;
//Multiple collectables
var collectables;
//Multiple canyons
var canyons;
//Menu fade code to control menu fade in/out
var menuFade = 255;
var menuMascot;
//Life Shapes for the players remaining lives
var lifeShape;
//platforms
var platforms;
//enemies
//menues
var welcomeScreen;
var mountains;
function preload() {
    soundFormats('mp3', 'ogg');
    myFont = loadFont("assets/kozmin.otf");
}

function setup() {
    //background
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    lives = 3;
    startGame();
}
function draw() {
    //Positioning the camera to the center of the character
    cameraPosX = gameChar_x - width / 2;
    ///////////DRAWING CODE//////////
    background(30, 30, 30); //fill the black background
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    push();
    translate(-cameraPosX, 0)
    //Declaring a new mountain object and drawing it
    mountains = new Mountain(color(54,35,18,220),color(270));
    mountains.drawMountain();
    //Declaring a new tree object and drawing it
    trees = new Tree(floorPos_y, Tree.trees_x, Tree.treePos_y);
    trees.drawTree();
    //Declaring a new cloud object and drawing it
    clouds = new Cloud();
    clouds.drawCloud();
    //New Star object and drawing it
    stars = new Star(6);
    stars.drawStar();
    //the game character
    if (isLeft && isFalling) {
        // add your jumping-left code
        fill(200, 0, 10)
        ellipse(gameChar_x, gameChar_y - 70, 20, 20);
        fill(38, 104, 0);
        rect(gameChar_x - 10, gameChar_y - 60, 20, 30);
        fill(60, 105, 225);
        rect(gameChar_x - 16, gameChar_y - 40, 8, 10);
        rect(gameChar_x - 2, gameChar_y - 40, 8, 10);
    }
    else if (isRight && isFalling) {
        // add your jumping-right code
        fill(200, 0, 10)
        ellipse(gameChar_x, gameChar_y - 70, 20, 20);
        fill(38, 104, 0);
        rect(gameChar_x - 10, gameChar_y - 60, 20, 30);
        fill(60, 105, 225);
        rect(gameChar_x - 4, gameChar_y - 40, 8, 10);
        rect(gameChar_x + 10, gameChar_y - 40, 8, 10);
    }
    else if (isLeft) {
        // add your walking left code
        fill(200, 0, 10)
        ellipse(gameChar_x, gameChar_y - 70, 20, 20);
        fill(38, 104, 0);
        rect(gameChar_x - 10, gameChar_y - 60, 20, 50);
        fill(60, 105, 225);
        rect(gameChar_x - 16, gameChar_y - 10, 8, 10);
        rect(gameChar_x - 2, gameChar_y - 10, 8, 10);
    }
    else if (isRight) {
        // add your walking right code
        fill(200, 0, 10)
        ellipse(gameChar_x, gameChar_y - 70, 20, 20);
        fill(38, 104, 0);
        rect(gameChar_x - 10, gameChar_y - 60, 20, 50);
        fill(60, 105, 225);
        rect(gameChar_x - 4, gameChar_y - 10, 8, 10);
        rect(gameChar_x + 10, gameChar_y - 10, 8, 10);
    }
    else if (isFalling || isPlummeting) {
        // add your jumping facing forwards code
        fill(200, 0, 10)
        ellipse(gameChar_x, gameChar_y - 70, 20, 20);
        fill(38, 104, 0);
        rect(gameChar_x - 10, gameChar_y - 60, 20, 30);
        fill(60, 105, 225);
        rect(gameChar_x - 10, gameChar_y - 30, 8, 10);
        rect(gameChar_x + 2, gameChar_y - 40, 8, 10);
    }
    else {
        //  standing front facing code
        fill(200, 0, 10)
        ellipse(gameChar_x, gameChar_y - 70, 20, 20);
        fill(38, 104, 0);
        rect(gameChar_x - 10, gameChar_y - 60, 20, 50);
        fill(60, 105, 225);
        rect(gameChar_x - 10, gameChar_y - 10, 8, 10);
        rect(gameChar_x + 2, gameChar_y - 10, 8, 10);
    }
    for (var i = 0; i < collectables.length; i++) {
        //check if game character is too close to the collectable
        if (!collectables[i].isFound) {
            checkCollectable(collectables[i]);
            drawCollectable(collectables[i]);
        }
    }
    //check if game character is too close to the canyon
    for (var k = 0; k < canyons.length; k++) {
        drawCanyon(canyons[k]);
        checkCanyon(canyons[k]);
    }
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
    renderFlagpole();
    if (!flagpole.isReached) {
        checkFlagpole();
    }
    checkPlayerDie();
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);
        if (isContact && lives > 0) {
            startGame();
            console.log("contact");
            lives--;
            break;
        }
    }
    pop();
    //Score drawing function
    fill(255, 255, 255);
    noStroke();
    text("Score: " + game_score, 20, 20);
    for (var i = 0; i < lives; i++) {
        drawLife(lives);
    }
    if (lives < 1) {
        fill(255, 255, 255);
        textSize(20);
        text("GAME OVER", 500, 300);
        text("Press space to continue.", 500, 350);
        return;
    }
    if (flagpole.isReached) {
        fill(255, 255, 255);
        textSize(20);
        text("You Win!", 500, 300);
        text("Press space to continue.", 500, 350);
        return;
    }
    ///////////INTERACTION CODE//////////
    //menu controls
    menuFade = menuFade - 1;
    if (menuFade < 0) {
        isMenu = false;
    }
    //Welcome Screen
    if (isMenu && lives == 3) {
        welcomeScreen = new MenuBox(500,150,20,color(0,0,0,menuFade),color(255,255,255,menuFade),myFont,250,150,"Welcome to the adventures of Roger Gump Bump!", "Use WASD keys to move!", "Click on the screen to skip this.","P.S You can call him RGB Boy :)");
        welcomeScreen.drawMenu();
        //Character Shape
        menuMascot = new Mascot(color(200,0,10,menuFade),color(38,104,0,menuFade),color(60,105,225,menuFade), gameChar_x, gameChar_y, 20);
        menuMascot.drawMascot();
    }
    //walking left
    if (isLeft == true) {
        gameChar_x -= 2;
    }
    //walking right
    if (isRight == true) {
        gameChar_x += 2;
    }
    if (gameChar_y < floorPos_y) {
        for (var i = 0; i < platforms.length; i++) {
            if (platforms[i].checkContact(gameChar_x, gameChar_y) == true) {
                isFalling = false;
                break;
            }
        gameChar_y += 2;
        isFalling = true;
    }
}
    if (gameChar_y >= floorPos_y) {
        isFalling = false;
    }
    if (isPlummeting == true) {
        gameChar_y += 3;
    }

}
function keyPressed() {
    /*If statements to control the characters movement. Should be disable during plummet & log-in menu */
    if (!isPlummeting && (!isMenu || lives != 3) ) {
        if (keyCode == 65) {
            isLeft = true;
        }
        if (keyCode == 68) {
            isRight = true;
        }
        if (keyCode == 87 && !isFalling && !isPlummeting) {
            gameChar_y = gameChar_y - 300;
        }
    }
}
function keyReleased() {
    // if statements to control the animation of the character when
    // keys are released.
    if (keyCode == 65) {
        isLeft = false;
    }
    if (keyCode == 68) {
        isRight = false;
    }
}
function mousePressed() {
    //if mouse is pressed, the menu will disappear
    isMenu = false;
}
function drawTrees() {
    // For loop to traverse the array of trees_x
    for (var i = 0; i < trees_x.length; i++) {
        fill(90, 40, 19);
        rect(trees_x[i], treePos_y + 19, 50, 130);
        fill(0, 101, 0);
        triangle(trees_x[i] - 50, treePos_y + 30, trees_x[i] + 30, treePos_y - 136, trees_x[i] + 100, treePos_y + 30);

    }
}
function drawCollectable(t_collectable) {
    //draw collectable
    if (!t_collectable.isFound) {
        noStroke();
        fill(204, 55, 51);
        circle(t_collectable.x_pos + 6, t_collectable.y_pos + 10, t_collectable.size + 10);
        fill(0, 110, 0);
        ellipse(t_collectable.x_pos - 10, t_collectable.y_pos - 15, 10, t_collectable.size - 10);
        strokeWeight(5);
        stroke(41, 0, 0);
        line(t_collectable.x_pos + 6, t_collectable.y_pos, t_collectable.x_pos + 7, t_collectable.y_pos - 20);
    }
}
function drawCanyon(t_canyon) {
    //draw canyon
    fill(56, 0, 0);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width + 30, 300);
    fill(94, 0, 0, 110);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width + 20, 300);
}
function checkCollectable(t_collectable) {
    //check if collectable is found
    var d = dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos);
    if (d < 50) {
        t_collectable.isFound = true;
        game_score += 1;
    }
}
function checkCanyon(t_canyon) {
    //check if character is over a canyon
    if (gameChar_x > t_canyon.x_pos && gameChar_x < t_canyon.x_pos + t_canyon.width && gameChar_y >= floorPos_y) {
        isPlummeting = true;
    }
}
function renderFlagpole() {
    push();
    strokeWeight(5);
    stroke(100);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    noStroke();
    fill(255, 0, 0);
    if (flagpole.isReached) {
        rect(flagpole.x_pos, floorPos_y - 250, 50, 50);
    }
    else {
        rect(flagpole.x_pos, floorPos_y - 50, 50, 50);
    }
    pop();
}
function checkFlagpole() {
    var d = abs(gameChar_x - flagpole.x_pos);
    if (d < 15) {
        flagpole.isReached = true;
    }
}
function checkPlayerDie() {
    if (gameChar_y > height) {
        --lives;
        if (lives > 0) {
            startGame();
        }
    }

}
function startGame() {
    //Character Positions
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    //Bools for Interaction
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    //Tree Positions
    trees_x = [-1100, -800, -200, -300, 300, 500, 900, 1300, 1700, 2100];
    treePos_y = floorPos_y - 150
    //camera
    cameraPosX = 0;
    //Canyon objects
    canyons = [
        { x_pos: 98, y_pos: 400, width: 60 },
        { x_pos: 598, y_pos: 400, width: 110 },
        { x_pos: 1098, y_pos: 400, width: 65 },
        { x_pos: 1598, y_pos: 400, width: 14 },
        { x_pos: 2098, y_pos: 400, width: 70 },]
    //Collectable objects
    collectables = [
        { x_pos: 400, y_pos: 400, size: 40, isFound: false },
        { x_pos: 800, y_pos: 400, size: 40, isFound: false },
        { x_pos: 1200, y_pos: 400, size: 40, isFound: false },
        { x_pos: 1600, y_pos: 400, size: 40, isFound: false },
        { x_pos: 2000, y_pos: 400, size: 40, isFound: false },
        { x_pos: 2400, y_pos: 400, size: 40, isFound: false },
        { x_pos: 2800, y_pos: 400, size: 40, isFound: false },
        { x_pos: -400, y_pos: 400, size: 40, isFound: false },
        { x_pos: -800, y_pos: 400, size: 40, isFound: false },
        { x_pos: -1200, y_pos: 400, size: 40, isFound: false },
        { x_pos: -1600, y_pos: 400, size: 40, isFound: false },]
    //Flagpole
    flagpole = { x_pos: 1800, isReached: false }
    //Menu
    isMenu = true;
    //platforms
    platforms = [];
    platforms.push(createPlatforms(100,floorPos_y-100,100));
    //enemies
    enemies = [];
    enemies.push(new Enemies(100, floorPos_y - 10, 100));
    //Game Score
    game_score = 0;
    
    console.log("Game Started");
}
function drawLife() {
    fill(255);
    noStroke();
    textSize(15);
    text("Lives: " + lives, 20, 40);
    if(lives >= 1){
    //red circle
    fill(255, 0, 0);
    ellipse(82, 35, 10);
    }
    if(lives >= 2){
    //green circle
    fill(0, 255, 0);
    ellipse(102, 35, 10);
    }
    if(lives >= 3){
    //blue circle
    fill(0, 0, 255);
    ellipse(122, 35, 10);
    }
}
function createPlatforms(x,y,length){

    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
            fill(150);
            rect(this.x, this.y, this.length, 20);
        },
        checkContact: function(gc_x, gc_y){
            if(gc_x > this.x && gc_x < this.x + this.length){
                var d = this.y - gc_y;
                if(d >= 0 && d < 5){
                    console.log("contact on pt");
                    return true;
                }
            }

        }
}
    return p;
}
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

