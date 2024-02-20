const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");

let playerWins = 0;
let computerWins = 0;
let resultDiv = document.getElementById("result");
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + " został kliknięty");
  
  let computerMove, randomNumber;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  if (randomNumber == "1") {
    computerMove = "kamień";
  } else if (randomNumber == "2") {
    computerMove = "papier";
  } else if (randomNumber == "3") {
    computerMove = "nożyce";
  }
  printMessage("Mój ruch: " + computerMove);

  let playerInput, playerMove;
  if (playerInput == "1") {
    playerMove = "kamień";
  } else if (playerInput == "2") {
    playerMove = "papier";
  } else if (playerInput == "3") {
    playerMove = "nożyce";
  }
  printMessage("Twój ruch: " + argButtonName);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
  } else if (argMoveId == 2) {
      return "papier";
  } else if (argMoveId == 3) {
      return "nożyce";
  } else {
    printMessage(
        "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
      );
    return "kamień";
    }
  }



  function displayResult(argPlayerMove, argComputerMove) {
    console.log(
      "wywołano funkcję displayResults z argumentami: " +
        argPlayerMove +
        ", " +
        argComputerMove
      );
    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
        printMessage("Wygrywasz!");
        playerWins++;
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
        printMessage("Wygrywasz!");
        playerWins++;
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
        printMessage("Wygrywasz!");
        playerWins++;
    } else if (argPlayerMove == argComputerMove) {
        printMessage("Remis!");
    } else {
        printMessage("Przegrywasz!");
        computerWins++;
     }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + ".");
    printMessage("Punkty: Ty - Computer")
    resultDiv.textContent = `${playerWins} - ${computerWins}`;
      if (playerWins == 3) {                                                             // !!! NIE DZIALA Dodac logike aby gra 
                                                                                          // rozgrywala sie do 3 rund z wynikiem !!!
        console.log('Gratulacje! Wygrałeś!');
      } else if (computerWins == 3) { 
        console.log('Niestety, przegrywasz.');
    };
  };

  playerMove = argButtonName;
  console.log("wybór ruchu gracza to: " + playerMove);
  console.log("ruch gracza to: " + playerMove);
  console.log("wylosowana liczba to: " + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);

}

buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});

