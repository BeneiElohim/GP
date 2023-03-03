var p;
var stage;
var floorPos_y;
var isMenu;
var cameraPosX;
var flagpole;
var collectables;
var canyons;
var menuMascot;
var lifeShape;
var platforms;
var welcomeScreen;
var mountains;
var flakes;
let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let secondsEnd = 0;
let minutesEnd = 0;
let millisecondsEnd = 0;
let isMuted = false;
function preload() {
    soundFormats('mp3', 'ogg');
    kozminFont = loadFont("assets/kozmin.otf");
    lightInUs= loadSound("assets/light-in-us.mp3");
    lightInUs.setVolume(0.4);
    jumpEffect = loadSound("assets/jump.mp3");
    jumpEffect.setVolume(0.1);
    stage = 0;
    p = player;
    p.lives = 3;
    p.score = 0;

}

function setup() {
    //background
    createCanvas(1024, 576);

    floorPos_y = height * 3 / 4;
    startGame();
}
function draw() {
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
    timer();
    muteButton();
    if (p.lives == 0 && p.isLoser == false) {
        stage = 3;
        setup();
    }
    if (flagpole.isReached) {
        stage++;
        setup();
    }
    ///////////INTERACTION CODE//////////
    //Welcome Screen
    if (isMenu && p.lives == 3) {
        welcomeScreen = new MenuBox(500,150,20,color(0,0,0),color(255,255,255),kozminFont,250,150,"Welcome to the adventures of Roger Gump Bump!", "Use WASD or Arrow keys to move! ", "You can press M to mute.","Click your screen to skip this menu.");
        welcomeScreen.drawMenu();
        //Character Shape
        menuMascot = new Mascot(color(200,0,10),color(38,104,0),color(60,105,225), p.xPos + 480, p.yPos, 20);
        menuMascot.drawMascot();
    }
    muteButton();
    if (!lightInUs.isPlaying() && isMuted == false && isMenu == false){
        lightInUs.play();
    }
    else if (isMuted == true){
        lightInUs.pause();
    }
    if (stage == 3) {
        if (p.isWinner) {
        winMenu = new MenuBox(500,150,20,color(0,0,0),color(255,255,255),kozminFont,250,150,"You have completed the game and RGB's Adventure!","Thank you for playing!","Press R to restart.", "Time: " + minutesEnd + ":" + secondsEnd + ":" + millisecondsEnd);
        winMenu.drawMenu();
        menuMascot.drawMascot();
        p.xPos = 50;
    }
    if (p.isLoser) {
        loseMenu = new MenuBox(500,150,20,color(0,0,0),color(255,255,255),kozminFont,250,150,"You have lost the game and costed RGB his colors :( ","Press R to restart.", "Time: " + minutesEnd + ":" + secondsEnd + ":" + millisecondsEnd);
        loseMenu.drawMenu();
        menuMascot.drawMascot();
        p.xPos = 50;
    }
}
    
}
function startGame() {
    setStage(stage);
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
    //camera
    cameraPosX = 0;
    //Menu

    flakes= []
    let flakeCount = 150;
    if (stage == 0) {
        flakeCount = 150;
        isMenu = true;
    }
    else if (stage == 1) {
        flakeCount = 100;
    }
    else if (stage == 2) {
        flakeCount = 50;
    }
    for (var i = 0; i < flakeCount ; i++)
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
        case 3:
            setLevelFour();
            break;
    }
}