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
var flakes;
var devMode = false;
function preload() {
    soundFormats('mp3', 'ogg');
    myFont = loadFont("assets/kozmin.otf");
    lightInUs= loadSound("assets/light-in-us.mp3");
    lightInUs.setVolume(0.5);
    stage = 1;
    p = player;
    p.lives = 3;
    p.score = 0;

}

function setup() {
    //background
    if (!lightInUs.isPlaying()){
        lightInUs.play();
        console.log("playing");
    }
    createCanvas(1024, 576);

    floorPos_y = height * 3 / 4;
    startGame();
}
function draw() {

    if (devMode){
        p.xPos = mouseX;
        p.yPos = mouseY;
    }
    p.xPos = constrain(p.xPos, -134, p.xPos);
    //Positioning the camera to the center of the character
    cameraPosX = max(p.xPos - width/2, -150);
    ///////////DRAWING CODE////////// //fill the black background
    drawSky(p.score); //draw the background
    noStroke();
    push();
    translate(-cameraPosX, 0)
    drawFloors(p.score); //draw the ground
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
    for (let i = 0; i < flakes.length; i++) {
        flakes[i].drawSnowflake();
    }
    
    flagpole.draw();
    p.checkDeath();
    if (p.isDead) {
        return;
    }
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
        menuMascot = new Mascot(color(200,0,10,menuFade),color(38,104,0,menuFade),color(60,105,225,menuFade), p.xPos + 480, p.yPos, 20);
        menuMascot.drawMascot();
    }
    fill(255);
    textSize(20);
    text("x is " + mouseX + " y is " + mouseY, mouseX, mouseY);
}
function startGame() {
    p.isFalling = false;
    p.isPlummeting = false;
    p.isLeft = false;
    p.isRight = false;
    //Character Positions
    p.xPos = 50;
    p.yPos = floorPos_y;
    stars = new Star(6,p.score); //Creating a new star object
    clouds = new Cloud(); //Creating a new cloud object
    mountains = new Mountain(color(54,35,18,220),color(270)); //Creating a new mountain object
    trees = new Tree(floorPos_y, Tree.trees_x, Tree.treePos_y);
    setStage(stage);
    //camera
    cameraPosX = 0;
    //Menu
    isMenu = true;
    flakes= []
    for (var i = 0; i < 150 ; i++)
    flakes.push(new Snowflake());
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
        default:
            console.log("Invalid stage number " + stage);
    }
}