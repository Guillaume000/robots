// Game.init

var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

// Game.launch
/*var player1 = board.robots[0];
var player2 = board.robots[1];
var wallsPosition = board.walls;
var weaponsPosition = board.weapons;*/
//turn est = à true pour le player1 et à false pour le player2
var turn = true;
var victoryCondition = false;

var actualPlayer = board.robots[0];

if(board.robots.length > 1){
    if (turn){
        actualPlayer = board.robots[0];
    }else{
        actualPlayer = board.robots[1];
    }
    //On va regarder les movements disponibles pour le joueur en cours
    board.setMobilityWithDirection("top", actualPlayer);
    board.setMobilityWithDirection("bottom", actualPlayer);
    board.setMobilityWithDirection("left", actualPlayer);
    board.setMobilityWithDirection("right", actualPlayer);
}

//Fin du tour du joueur en cours
$("#endTurn").click(function(){
    if(turn) {
        turn = false;
    } else {
        turn = true;
    }

    //Tours de jeu
    if(turn) { 
        console.log("J1");
        actualPlayer.move(board);
    }
    if(turn == false) {  
        console.log("J2");
        actualPlayer.move(board);
    }
    
    //$("#case-" + actualPlayer.position.a + actualPlayer.position.b).removeClass('mobility');
});

// Conditions de victoire = lifePoints à 0
/*if((player1.lifePoints == 0) || (player2.lifePoints == 0)) {
    victoryCondition = true;
    if(victoryCondition == true) {
        if(player1.lifePoints == 0) {
            alert("Le " + player2.name + " a gagné !");
        } else {
            alert("Le " + player1.name + " a gagné !");
        }
    }
}*/



    

