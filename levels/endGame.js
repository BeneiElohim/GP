function setLevelFour(){
        collectables = [] // Empty the array of collectables
        // EMPTY THE ARRAYS OF COLLECTABLES, CANYONS, PLATFORMS AND ENEMIES
        var collectableArray = [] 
        canyons = []
        var canyonArray  = []
        platforms = [];
        var platformArray = []
        enemies = [];
        var enemyArray = []
        flagpoleLoc = { x_pos: 1800, y_pos: floorPos_y, isReached: false } // Flagpole location, off screen
        flagpole = new Flagpole(flagpoleLoc.x_pos, flagpoleLoc.y_pos, flagpoleLoc.isReached); // Create a new flagpole object
        if (p.lives > 0) { // If the player has lives left
            p.isWinner = true; // Set the player to be a winner
            p.isLoser = false; // Set the player to not be a loser
        }
        if (p.lives == 0) { // If the player has no lives left
         p.isLoser = true; // Set the player to be a loser
         p.isWinner = false; // Set the player to not be a winner
        }
        
}