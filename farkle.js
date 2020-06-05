let chance = require("chance").Chance();

const farkleGame = () => {

    let haveYouPlayedAnswer = this.haveYouPlayedAnswer;
    let howMuchAreYouBetting = this.howMuchAreYouBetting;
    let continueAnswer = this.continueAnswer;
    let yourHand = new Array;
    let dealersHand = new Array;
    let playerOneHand = new Array;
    let playerTwoHand = new Array;
    let bet = this.bet;
    let purse = this.purse;
    let totalBet = this.totalBet;

    const dice = { "1": 2, "2": 5, "3": 5, "4": 4, "5": 2, "6": 3 };

    console.log("Welcome To Farkle\n");
    haveYouPlayedAnswer = prompt("Have you ever played farkle?\nY/N\n");
    if (haveYouPlayedAnswer.toLowerCase() === "n") {
        console.log("Object of the game is to be the first player to 5000 points\n");
        console.log("Only single 1's and 5's are worth points.\n");
        console.log("Other numbers count only if you get three or more of the same numer in a single roll.\n");
        console.log("Other combinations of numbers are worth points if you get them in a single roll.\n");
        console.log("All scoring dice will be removed\n");
        console.log("If you are lucky enough to have six scoring dice, you get to continue using all six dice.\n");
        console.log("If you have no scoring dice, you FARKLE and it is the next persons turn!");


    }





}