class Player {
    constructor(){
      this.name=null
      //this.distance=0
      this.index=null
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "players/player" + this.index;
      database.ref(contestantIndex).set({
        name:this.name
        
      });
  
    }
    static getContestantInfo(){
       var playerInfoRef=database.ref("contestant")
       playerInfoRef.on("value",(data)=>{
         allContestants=data.val();
       })
    }
  }