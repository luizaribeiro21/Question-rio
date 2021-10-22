class Quiz {
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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    //this.title.hide(); 
   //this.button.hide(); 
   //this.question.hide(); 
   //this.input1.hide(); 
    //this.input2.hide();  
    question.hide();   
    // escreva o código aqui para mudar a cor de fundo
    background ("yellow")
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    //text (this.name+"respondeu corretamente"); 
    //text(this.name+"respondeu incorretamente");
    text ("o resultado é: ", 340, 50)
    Contestant.getPlayerInfo(); 
    // chame getContestantInfo () aqui
    if (allContestants!== undefined){
      debugger; 
      var display_Answers =230; 
      fill ("blue")
      textSize (20); 
      text ("Jogador que respondeu a respota correta está destacado na cor verde", 130,230)
    }

    // escreva a condição para verificar se contestantInfor não é indefinido
    for (var plr in allContestants){
      debugger
      var correctAns = "2"
      if (correctAns === allContestants[plr].answer){
        fill ("green")
      } else{
        fill ("red")
      }

      display_Answers +=30
      textSize (20); 
      text (allContestants[plr].name + ": " + allContestants[plr].answer, 250, display_Answers)
    }

    
  }

}
