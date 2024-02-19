var argButtonName, buttonTest;
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });


var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
if (randomNumber == "1") {
  computerMove = "kamień";
} else {
  computerMove = "nieznany ruch";
}
printMessage("Mój ruch: " + computerMove);


var playerMove, playerInput;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "1") {
  playerMove = "kamień";
} else {
  playerMove = "nieznany ruch";
}
printMessage("Twój ruch: " + playerMove);






function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
} else if (argMoveId == 2) {
    return "papier";
    } else if (argMoveId == 3) {
        return "nożyce";
    } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".');
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
  } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == argComputerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz!");
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + '.');
}

playerMove = argButtonName;
// playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
// console.log("wybór ruchu gracza to: " + playerInput);
// playerMove = getMoveName(playerInput);
// console.log("ruch gracza to: " + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
computerMove = getMoveName(randomNumber);
console.log("ruch komputera to: " + computerMove);
displayResult(playerMove, computerMove);