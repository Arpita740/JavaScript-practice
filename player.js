function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return "Tie";
    if (
      (player1Choice === "rock" && player2Choice === "scissors") ||
      (player1Choice === "paper" && player2Choice === "rock") ||
      (player1Choice === "scissors" && player2Choice === "paper")
    ) {
      return "Player 1";
    } else {
      return "Player 2";
    }
  }
  
  function playGame() {
    let player1Score = 0;
    let player2Score = 0;
  
    for (let i = 0; i < 3; i++) {
      const player1Choice = prompt("Player 1, enter your choice (rock, paper, or scissors):").toLowerCase();
      const player2Choice = prompt("Player 2, enter your choice (rock, paper, or scissors):").toLowerCase();
  
      console.log(`Player 1 chose: ${player1Choice}`);
      console.log(`Player 2 chose: ${player2Choice}`);
  
      const winner = determineWinner(player1Choice, player2Choice);
  
      if (winner === "Player 1") {
        console.log("Player 1 wins this round!");
        player1Score++;
      } else if (winner === "Player 2") {
        console.log("Player 2 wins this round!");
        player2Score++;
      } else {
        console.log("It's a tie for this round!");
      }
    }
  
    if (player1Score > player2Score) {
      console.log("Player 1 wins the game!");
    } else if (player2Score > player1Score) {
      console.log("Player 2 wins the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  playGame();
  