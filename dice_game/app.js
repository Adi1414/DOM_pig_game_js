/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,activeUser,roundScore,gamePlaying;

initalize();

function getDiceNumber() {
 if (gamePlaying) 
 {
     var diceNumber = Math.floor(Math.random()*5+1);
	 document.querySelector(".dice").style.display = 'block';
	 document.querySelector(".dice").src = 'dice-'+diceNumber+'.png';

	 if (diceNumber !== 1)
	 {
	   roundScore += diceNumber;
	   document.getElementById("current-"+activeUser).textContent = roundScore;
	 }
	 else
	 {
	 	document.querySelector(".dice").style.display = 'none';
	    nextPlayer();
	 }
 }
 

}

function addToScores() {
 if(gamePlaying)
 {
   scores[activeUser] += roundScore;
  document.getElementById("score-"+activeUser).textContent = scores[activeUser];
  if(scores[activeUser] >= 20 )
  {
    document.getElementById("name-"+activeUser).textContent = 'Winner';
    document.querySelector(".dice").style.display = 'none';
    document.getElementById("name-"+activeUser).classList.add('winner');
    document.querySelector(".player-"+activeUser+"-panel").classList.remove('active');
    gamePlaying = false;
  }
  else
  {
  	nextPlayer();
  }
 }
}

function nextPlayer() {
	roundScore = 0;
    document.getElementById("current-"+activeUser).textContent = roundScore;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    activeUser = activeUser === 0 ? 1 : 0;
    //document.querySelector(".player-"+activeUser+"-panel").classList.add('active');
}

function initalize() {
scores = [0,0];
roundScore = 0;
activeUser = 0;
gamePlaying = true;

document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("name-0").textContent = 'Player 1';
document.getElementById("name-1").textContent = 'Player 2';

document.querySelector(".dice").style.display = 'none';
document.querySelector(".player-0-panel").classList.add('active');
document.getElementById("name-1").classList.remove('winner');
document.getElementById("name-0").classList.remove('winner');

}

document.querySelector(".btn-roll").addEventListener("click", getDiceNumber);
document.querySelector(".btn-hold").addEventListener("click", addToScores);
document.querySelector(".btn-new").addEventListener("click", initalize);



