class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        contestant = new Player();
        contestant.getCount();
        form = new Form()
        form.display();
      }
    }
    play(){
      form.hide();
      title.hide();
      background("yellow")
      var tit = createElement('h1')
      tit.html("Result");
      tit.position(500, 0);
      Player.getContestantInfo();

      if(allContestants!==undefined){
       fill("Blue")
       textSize(20)
       text("*NOTE*:Contestant who answer correct are highlighted  in green color",130,430)
        for(var plr in allContestants){
          var correctAns="2";
          if(correctAns===allContestants[plr].answer){
            fill("Green")
          }
          else{
            fill("red")
            
          }
          display_position+=250
          textSize(15)
          text(allContestants[plr].name+":" +allContestants[plr].answer,120,display_position)
        }
      }
    }
  }