//creating global player object variable
var p;
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
    lives = 3;
    floorPos_y = height * 3 / 4;
    startGame();
}
function draw() {
    //Positioning the camera to the center of the character
    cameraPosX = p.xPos - width / 2;
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
    clouds.drawCloud();
    //New Star object and drawing it
    stars.drawStar();
    //the game character
    if (isLeft && isFalling) {
        p.jumpingLeft();
    }
    else if (isRight && isFalling) {
        p.jumpingRight();
    }

    else if (isLeft) {
        p.walkingLeft();
    }
    else if (isRight) {
        p.walkingRight();
    }
    else if (isFalling || isPlummeting) {
        p.jumpingForward();
    }
    else {
        p.standing();
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
        var isContact = enemies[i].checkContact(p.xPos, p.yPos);
        if (isContact && lives > 0) {
            startGame();
            console.log("contact");
            lives--;
            break;
        }
    }
    pop();
    //Score drawing function
    statCounter.drawMenu();
    fill(255, 255, 255);
    noStroke();
    text("Score: " + game_score, 20, 20);
/*     for (var i = 0; i < lives; i++) {
        drawLife(lives);
    } */
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
        menuMascot = new Mascot(color(200,0,10,menuFade),color(38,104,0,menuFade),color(60,105,225,menuFade), p.xPos, p.yPos, 20);
        menuMascot.drawMascot();
    }
    //walking left
    if (isLeft == true) {
        p.xPos -= 2;
    }
    //walking right
    if (isRight == true) {
        p.xPos += 2;
    }
    if (p.yPos < floorPos_y) {
        for (var i = 0; i < platforms.length; i++) {
            if (platforms[i].checkContact(p.xPos, p.yPos) == true) {
                isFalling = false;
                break;
            }
        p.yPos += 2;
        isFalling = true;
    }
}
    if (p.yPos >= floorPos_y) {
        isFalling = false;
    }
    if (isPlummeting == true) {
        p.yPos += 3;
    }
}
function startGame() {
    stars = new Star(6); //Creating a new star object
    clouds = new Cloud(); //Creating a new cloud object
    mountains = new Mountain(color(54,35,18,220),color(270)); //Creating a new mountain object
    // MenuBox for the Score and Lives counter
    statCounter = new MenuBox(50,40,6,color(0),color(255),myFont,0,0,'Lives '+ lives, 'Score ' + game_score);
    p = player;  
    //Character Positions
    p.xPos = width / 2;
    p.yPos = floorPos_y;
    //Bools for Interaction
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    //Tree Positions
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

