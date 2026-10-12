
console.log("Hello World!");

console.log("Rock, Paper, Scissors game!");

function getZombiesChoice() {
    let randomNum = Math.random();

    if (randomNum < 0.33) {
        return "rock";

    } else if (randomNum < 0.66) {
        return "paper";

    } else {
        return "scissors";
    }
   
}


function gethumansChoice() {
    const choice = prompt("Choose rock, paper, or scissors:");
    return choice.toLowerCase();
}

 let humans = 0;
 let zombies = 0;

function playRound(humanschoice, zombieschoice) {
    // Implementation for playing a single round
    zombieschoice = zombieschoice.toLowerCase();
    if (humanschoice === zombieschoice) {
        console.log("It's a tie!");
    } else if (
        (humanschoice === "rock" && zombieschoice === "scissors") ||
        (humanschoice === "paper" && zombieschoice === "rock") ||
        (humanschoice === "scissors" && zombieschoice === "paper")
    ) {
        console.log("Humans win this round!");
        humans++;
    } else {
        console.log("Zombies win this round!");
        zombies++;
    }
 }

 function playGame() {
    humans = 0;
    zombies = 0;

    for (let i = 0; i < 5; i++) {
        const humans = getHumansChoice();
        const zombies = getZombiesChoice(); 

        playRound(humans, zombies); 
            
    }

    console.log ("================");
    console.log("Game Over!");
    console.log("Humans: " + humans);
    console.log("Zombies: " + zombies);
    console.log("================");
}

if (humans > zombies) {
    console.log("Humans win!");
} else if (zombies > humans) {
    console.log("Zombies win!");
} else {
    console.log("It's a tie!");
}   
function getHumansChoice() {
        let randomNum = Math.floor(Math.random() * 2);
}

//start the game
    playGame();
