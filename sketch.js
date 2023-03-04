/* Roger Gump Bump's Adventure for Introduction to Programming I course
    This is a game where you play as Roger Gump Bump, who is tasked with collecting colors back for his world.
    In this 3 stage mini-story game, our player goes through enemies, platforms, and obstacles to reach the end of the game.
    Candidate Number: Ismail Mert Tarihci
    Candidate Number: EX1394

    The game is made using p5js and p5.sound libraries. The game involves functional and object-oriented programming.
    The project folder is split into multiple files and directories, each containing a specific part of the game.

    Controls.js: Containts the controls for the game, including the player movement, the mute button, mouse clicks, and a reset button. 
    Environment.js: Contains the environment of the game, including the background, the ground, the mountains, the trees, the clouds, the stars and the snow. Includes both constructor and functional programming. As the game's background is designed to be 
    static throughout the game, each element's position is specified in an array inside the constructor. The draw function is used to draw each element in the array.
    Mechanics.js: Includes the interactable game mechanics such as the canyon the player can fall off, collectables the player can earn score off of, Enemies that will take the life of a player on touch, platforms the players can jump on and a flagpole, as a win condition.
    Player.js:This file includes 1 object that is the player object. Includes the player's movement, the player's lives, the player's score, functions necessary for the player to jump and move around as well as boolean checks to run such functions, players death, lose and win conditions.
    Ui.js: Includes the UI part of the game. Includes a MenuBox constructor to build UI elements on demand, a Mascot to draw RGB anywhere on the screen as needed and functions to draw the lives, the score, the mute button and, the timer.
    levels/level1.js|level2.js|level3.js: On each level, the arrays of the mechanics are filled according to the level's design. Then the levels are pushed to respective arrays. In the sketch files, these object's methods are called to draw them.
    levels/endGame.js: Includes the end game screen, which is a MenuBox object. Includes the end game screen's text and the instructions to restart the game.
    The background music, "light-in-us.mp3", by Mathbonus, called "There Is Light in Us", sped up "https://www.youtube.com/watch?v=gsFDxyFrhjg". Licensed by DashGo/Audiobee (for Mathbonus).
    The jump sound effect, "jump.mp3", by "Just 4every1", published on "https://www.youtube.com/watch?v=561qHylVC_o". 
    Font, "kozmin.otf", published on "https://fontzone.net/font-details/kozminpro-regular".
*/

/////////////GLOBAL VARIABLES/////////////
let p; // Player object
let stage; // Stage of the game. 0,1,2 are the levels, 3 is the end game screen.
let floorPos_y; // Floor position
let isMenu; // Boolean to check if the game is in the menu
let cameraPosX; // Camera position
let flagpole; // Flagpole object
let collectables; // Array of collectables
let canyons; // Array of canyons
let menuMascot; // Mascot object to be used whenever
let lifeShape; // Shape of the life
let platforms; // Array of platforms
let welcomeScreen; // MenuBox object for the welcome screen
let mountains; // Mountain object
let flakes; // Array of snowflakes
let seconds = 0; // Timer variables
let minutes = 0; // Timer variables
let milliseconds = 0; // Timer variables
let secondsEnd = 0; // Timer variables for recording the end time
let minutesEnd = 0; // Timer variables for recording the end time
let millisecondsEnd = 0; // Timer variables for recording the end time
let isMuted = false; // Boolean to check if the game sound is muted

function preload() {  //Preload all the assets and setting the stage to 0, as well as player lives and score and creating the player object on the variable p.
    soundFormats('mp3', 'ogg'); // Sound types
    kozminFont = loadFont("assets/kozmin.otf"); // Font 
    lightInUs= loadSound("assets/light-in-us.mp3"); // Background music
    lightInUs.setVolume(0.4); // Background music volume
    jumpEffect = loadSound("assets/jump.mp3"); // Jump sound effect
    jumpEffect.setVolume(0.1); // Jump sound effect volume
    stage = 0; // Stage of the game at browser reload
    p = player; // Player object
    p.lives = 3;  // Player lives
    p.score = 0; // Player score

}

function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    startGame();
}
function draw() {
    //// MAIN SETTINGS ////
    p.xPos = constrain(p.xPos, -134, p.xPos); // Setting boundaries for the players movement
    cameraPosX = max(p.xPos - width/2, -150); //Positioning the camera to the center of the character, unless the character is too close to the edge of the screen
    //// DRAWING THE GAME ENVIROMENT /////
    drawSky(p.score); // Draw the dynamic with the score
    noStroke();
    push();
    translate(-cameraPosX, 0)
    drawFloors(p.score); //draw the ground
    mountains.drawMountain(); //draw the mountains using the mountain class method
    trees.drawTree(); //draw the trees using the tree class method
    clouds.drawCloud(); //draw the clouds using the cloud class method
    stars.drawStar(); //draw the stars using the star class method
    p.playerMovement(); //method that will control the player movement along with player look on player object

    //// DRAWING THE GAME MECHANICS /////
    for (let i = 0; i < collectables.length; i++) {
        collectables[i].draw(); //draw the collectables
    }
    //check if game character is too close to the canyon
    for (let i = 0; i < canyons.length; i++) {
        canyons[i].draw(); //draw the canyons
    }
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw(); //draw the platforms
    }
    for (let i = 0; i < flakes.length; i++) {
        flakes[i].drawSnowflake(); //draw the snowflakes
    }
    flagpole.draw(); //draw the flagpole
    p.checkDeath(); //check if the player is dead

    // Enemy drawing and proximity check
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
    //// DRAWING THE UI /////
    typeScore();
    drawLife();
    timer();
    muteButton();
    //Welcome Screen to be shown at the start of the game
    if (isMenu && p.lives == 3) {
        welcomeScreen = new MenuBox(500,150,20,color(0,0,0),color(255,255,255),kozminFont,250,150,"Welcome to the adventures of Roger Gump Bump!", "Use WASD or Arrow keys to move! ", "You can press M to mute.","Click your screen to skip this menu."); //MenuBox object
        welcomeScreen.drawMenu(); //Draw the menu
        //Character Shape
        menuMascot = new Mascot(color(200,0,10),color(38,104,0),color(60,105,225), p.xPos + 480, p.yPos, 20); // Normal Mascot object
        menuMascot.drawMascot(); //Draw the mascot
    }
    if (stage == 3) {
        if (p.isWinner) {
        winMenu = new MenuBox(500,150,20,color(0,0,0),color(255,255,255),kozminFont,250,150,"You have completed the game and RGB's Adventure!","Thank you for playing!","Press R to restart.", "Time: " + minutesEnd + ":" + secondsEnd + ":" + millisecondsEnd); //MenuBox object with a timer
        winMenu.drawMenu(); //Draw the menu
        winMascot = new Mascot(color(255,0,0),color(0,255,0),color(0,0,255), p.xPos + 480, p.yPos, 20); // Winner Mascot object with brighter colors
        winMascot.drawMascot(); //Draw the mascot
        p.xPos = 50;
        }
        if (p.isLoser) {
        loseMenu = new MenuBox(500,150,20,color(0,0,0),color(255,255,255),kozminFont,250,150,"You have lost the game and costed RGB his colors :( ","Press R to restart.", "Time: " + minutesEnd + ":" + secondsEnd + ":" + millisecondsEnd); //MenuBox object with a timer
        loseMenu.drawMenu(); //Draw the menu
        loseMascot = new Mascot(color(80,80,80),color(80,80,80),color(80,80,80), p.xPos + 480, p.yPos, 20); // Loser Mascot object with grey colors
        loseMascot.drawMascot(); //Draw the mascot
        p.xPos = 50;
        }
    }
    // Game Over Screen
    if (p.lives == 0 && p.isLoser == false) {
        stage = 3; // Setting the stage to 3 to show the end game screen
        setup(); // Calling the set-up function to reset the game
    }
    // Level successfull screen
    if (flagpole.isReached) {
        stage++;
        setup();
    }
    //// BACKGROUND MUSIC ////
    if (!lightInUs.isPlaying() && isMuted == false && isMenu == false){
        lightInUs.play();
    }
    else if (isMuted == true){
        lightInUs.pause();
    } 
}
function startGame() {
    setStage(stage); // Setting the stage of the game
    p.isFalling = false; // Setting the player to not be falling
    p.isPlummeting = false; // Setting the player to not be plummeting
    p.isLeft = false; // Setting the player to not be moving left
    p.isRight = false; // Setting the player to not be moving right
    p.xPos = 50; // Setting the player to the starting position horizontally
    p.yPos = floorPos_y; // Setting the player to the starting position vertically
    stars = new Star(6,p.score); //Creating a new stars object 
    clouds = new Cloud(); //Creating a new clouds object
    mountains = new Mountain(color(54,35,18,220),color(270)); //Creating a new mountain sobject
    trees = new Tree(floorPos_y, Tree.trees_x, Tree.treePos_y); //Creating a new trees object
    cameraPosX = 0; // Setting the camera position to 0
    // Code to push flakes into the flakes array depending on the stage to draw progressively less snowflakes
    flakes= []
    let flakeCount = 150;
    if (stage == 0) {
        flakeCount = 150;
        if (p.lives == 3) {
            isMenu = true;
        }
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
// Function to run the game depending on the stage
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