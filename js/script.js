const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");
// const counterPlayer = document.getElementById("counter-player");
// const counterComputer = document.getElementById("counter-computer");

function buttonClicked(argButtonName) {
  clearMessages();
  printMessage("Wybrałeś: " + argButtonName);
    const playerMove = argButtonName;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("wylosowana liczba to: " + randomNumber);
    const computerMove = getMoveName(randomNumber);
  printMessage("Ruch komputera to: " + computerMove);
    displayResult(playerMove, computerMove);
  

  
  function getMoveName(randomNumber) {
    if (randomNumber == 1) {
      return "kamień";
    } else if (randomNumber == 2) {
      return "papier";
    } else if (randomNumber == 3) {
      return "nożyce";
    } else {
    printMessage(
      "Nie znam ruchu o id " + randomNumber + ""
      );
      return "nieznany ruch";
    }
  }

  

  function displayResult(playerMove, computerMove) {
  if (playerMove === "papier" && computerMove === "kamień") {
    printMessage("Wygrywasz!");
  } else if (playerMove === "nożyce" && computerMove === "papier") {
    printMessage("Wygrywasz!");
  } else if (playerMove === "kamień" && computerMove === "nożyce") {
    printMessage("Wygrywasz!");
  } else if (playerMove === computerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz!");
  }    
}
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

