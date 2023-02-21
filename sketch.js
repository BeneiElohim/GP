var p;
var stage;
var floorPos_y;
var isMenu;
var cameraPosX;
var flagpole;
var collectables;
var canyons;
var menuFade = 255;
var menuMascot;
var lifeShape;
var platforms;
var welcomeScreen;
var mountains;
function preload() {
    soundFormats('mp3', 'ogg');
    myFont = loadFont("assets/kozmin.otf");
    lightInUs= loadSound("assets/light-in-us.mp3");
    stage = 0;
}

function setup() {
    //background
    lightInUs.play();
    createCanvas(1024, 576);
    p = player;
    p.lives = 3;
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
    mountains.drawMountain(); //draw the mountains using the mountain class method
    trees.drawTree(); //draw the trees using the tree class method
    clouds.drawCloud(); //draw the clouds using the cloud class method
    stars.drawStar(); //draw the stars using the star class method
    p.playerMovement(); //method that will control the player movement along with player look

    /*  CODE TO DRAW GAME CONTENT*/
    for (let i = 0; i < collectables.length; i++) {
        collectables[i].draw();
    }
    //check if game character is too close to the canyon
    for (let i = 0; i < canyons.length; i++) {
        canyons[i].draw();
    }
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
    flagpole.draw();
    p.checkDeath();
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        var isContact = enemies[i].checkContact(p.xPos, p.yPos);
        if (isContact && p.lives > 0) {
            startGame();
            console.log("contact");
            p.lives--;
            break;
        }
    }
    pop();
    //Score drawing function
    typeScore();
    drawLife();
    if (p.lives < 1) {
        fill(255, 255, 255);
        textSize(20);
        text("GAME OVER", 500, 300);
        text("Press space to continue.", 500, 350);
        return;
    }
    if (flagpole.isReached) {
        stage++;
        setup();
    }
    ///////////INTERACTION CODE//////////
    //menu controls
    menuFade = menuFade - 1;
    if (menuFade < 0) {
        isMenu = false;
    }
    //Welcome Screen
    if (isMenu && p.lives == 3) {
        welcomeScreen = new MenuBox(500,150,20,color(0,0,0,menuFade),color(255,255,255,menuFade),myFont,250,150,"Welcome to the adventures of Roger Gump Bump!", "Use WASD keys to move!", "Click on the screen to skip this.","P.S You can call him RGB Boy :)");
        welcomeScreen.drawMenu();
        //Character Shape
        menuMascot = new Mascot(color(200,0,10,menuFade),color(38,104,0,menuFade),color(60,105,225,menuFade), p.xPos, p.yPos, 20);
        menuMascot.drawMascot();
    }
}
function startGame() {
    p.isFalling = false;
    p.isPlummeting = false;
    p.isLeft = false;
    p.isRight = false;
    //Character Positions
    p.xPos = width / 2;
    p.yPos = floorPos_y;
    stars = new Star(6); //Creating a new star object
    clouds = new Cloud(); //Creating a new cloud object
    mountains = new Mountain(color(54,35,18,220),color(270)); //Creating a new mountain object
    trees = new Tree(floorPos_y, Tree.trees_x, Tree.treePos_y);
    setStage(stage);
    //camera
    cameraPosX = 0;
    //Menu
    isMenu = true;
    //enemies
    enemies = [];
    enemies.push(new Enemies(100, floorPos_y - 10, 100));
    //Game Score
    p.score = 0;
    console.log("Game Started");
}

function setStage() {
    switch (stage) {
        case 0:
            setLevelOne();
            break;
        case 1:
            setLevelTwo();
            break;
        case 2:
            setLevelThree();
            break;
        case 3:
            setLevelFour();
            break;
        case 4:
            setLevelFive();
            break;
        default:
            console.log("Invalid stage number " + stage);
    }
}