class Form {
    constructor() {
      this.input=createInput("name")
      this.button=createButton("Submit")
     this.answer=createInput("Enter the correct option")
    }
    hide(){
      this.input.hide()
      this.button.hide()
      this.answer.hide()
  
    }
  
    display(){
       title = createElement('h1')
      title.html("MyQuiz Game");
      title.position(500, 0);

  var question=createElement('h2')
  question.html("Question:-Which Word starts from E and ends at E but has only one letter");
  question.position(300, 100);
      
  var option=createElement('h2')
  option.html("1:Everyone");
  option.position(300, 150);
      
  var option1=createElement('h2')
  option1.html("2:Envelope");
  option1.position(300, 200);

  var option2=createElement('h2')
  option2.html("3:Estimate");
  option2.position(300, 250);

  var option3=createElement('h2')
  option3.html("4:Example");
  option3.position(300, 300);
      
      this.input.position(130, 400);
      this.button.position(250, 450);
      this.answer.position(330, 400);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.answer.hide();
        
         contestant.name = this.input.value();
       // answer.name=this.input.value();
        contestantCount+=1;
        contestant.index=contestantCount;
        contestant.update();
        
        contestant.updateCount(contestantCount);
       
        
      });
  
    }
  }