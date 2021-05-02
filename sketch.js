var database,gameState=0;
var form,contestant,game,allContestants;
var contestantCount;
var title;
//create variable for fairy sprite and fairyImg



function preload()
{
	
	//load animation for fairy here
}

function setup() {
	createCanvas(1200,800);

	database=firebase.database();
	game = new Game();
	game.getState();
	game.start();
	//create fairy sprite and add animation for fairy


	


	

	
	
}
function draw() {
	background("pink")
	if(contestantCount===2){
		game.update(1)
		
		
	  }
	  if(gameState===1){
		clear();
		game.play();
	  }
 
  

  //write code to stop star in the hand of fairy

  

}



	

	//writw code to move fairy left and right
	

