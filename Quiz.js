class Quiz {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database
        .ref("contestantCount")
        .once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play() {
    //write code here to hide question elements
    Questions.hide();
    //write code to change the background color here
    background("lightBlue");
    //write code to show a heading for showing the result of Quiz
    textSize(200);
    text("WINNER IS IN GREEN!", 20, 200);
    //call getContestantInfo( ) here
    if (allContestants !== undefined) {
      fill(Blue);
      textSize(20);
      text("*NOTE: THE PLAYER IN GREEN IS THE WINNER");
    }
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
  }
}
