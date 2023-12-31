console.log("connected");
let cpuOptions = ["r", "p", "s"];
let wins = 0;
let losses = 0;
let ties = 0;
// Ask user to start game

let letsPlay = confirm("Would you like to play Ro Sham Bo?");

function runGame() {
  // Prompt user for choice
  let choice = prompt("Type r for rock, p for papper, or s for scissors");
  console.log(choice);

  // CPU makes random choice
  let cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
  console.log(cpuChoice);

  // Compare choices and determine winner
  if (choice === "r" && cpuChoice === "s") {
    alert("You win, the computer chose s!");
    wins += 1;
  } else if (choice === "r" && cpuChoice === "p") {
    alert("You lose, the computer chose p!");
    losses += 1;
  } else if (choice === cpuChoice) {
    alert("It's a tie!");
    ties += 1;
  } else if (choice === "p" && cpuChoice === "r") {
    alert("You win, the computer chose r!");
    wins += 1;
  } else if (choice === "p" && cpuChoice === "s") {
    alert("You lose, the computer chose s!");
    losses += 1;
  } else if (choice === "s" && cpuChoice === "p") {
    alert("You win, the computer chose r!");
    wins += 1;
  } else if (choice === "s" && cpuChoice === "r") {
    alert("You lose, the computer chose r!");
    losses += 1;
  }
  alert(`Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Ties: " + ties);
  let letsPlayAgain = confirm("Would you like to contiue playing Ro Sham Bo?");
  if (letsPlayAgain) {
    runGame();
  } else {
    alert(
      `Well, you're an early quitter?! Have a nice day loser!\n Wins: ${wins}; Losses: ${losses}; Ties: ${ties}`
    );
  }
}

if (letsPlay) {
  runGame();
} else {
  alert("Well, have a nice day loser!");
}
