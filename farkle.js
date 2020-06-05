let chance = require("chance").Chance();

const farkleGame = () => {

    let haveYouPlayedAnswer = this.haveYouPlayedAnswer;
    let howMuchAreYouBetting = this.howMuchAreYouBetting;
    let continueAnswer = this.continueAnswer;
    let counter = 0;
    let dice = 6;
    let roll = this.roll;
    let playerHand = new Array;
    let dealersHand = new Array;
    let playerOneHand = new Array;
    let playerTwoHand = new Array;
    let bet = this.bet;
    let purse = this.purse;
    let totalBet = this.totalBet;

    const diceNumbers = { "1": 2, "2": 5, "3": 5, "4": 4, "5": 2, "6": 3 };

    console.log("Welcome To Farkle\n");
    haveYouPlayedAnswer = prompt("Have you ever played farkle?\nY/N\n");
    if (haveYouPlayedAnswer.toLowerCase() === "n") {
        console.log("Object of the game is to be the first player to 5000 points\n");
        console.log("Only single 1's and 5's are worth points.\n");
        console.log("Other numbers count only if you get three or more of the same numer in a single roll.\n");
        console.log("Other combinations of numbers are worth points if you get them in a single roll.\n");
        console.log("All scoring dice will be removed\n");
        console.log("If you are lucky enough to have six scoring dice, you get to continue using all six dice.\n");
        console.log("You can stop at anypoint during your turn and keep you points.");
        console.log("If you have no scoring dice, you FARKLE and it is the next persons turn!");
        continueAnswer = prompt("Are you ready to play?\nY/N\n");
        if (continueAnswer.toLowerCase() === "n") {
            console.log("Thanks for coming by and wasting my time explaining the rules...you would've lost your money anyways!!!");
        } else {
            purse = prompt("How much money are you starting with?\n");
            bet = prompt("How much would you like to bet this game?\n");
            roll = prompt("You go first, would you like to roll?\nY/N\n");
            if (roll.toLowerCase() === "n") {
                console.log("Okay my turn!\n");

                //TODO: Create the dealers turn.

            } else {
                do {
                    let arrayOne = Object.keys(diceNumbers);
                    let arrayTwo = Object.values(diceNumbers);
                    let dieNumber = chance.weighted(arrayOne, arrayTwo);
                    playerHand.push(dieNumber);
                } while (dice < 6);
            }

        }



    }





}

farkleGame();