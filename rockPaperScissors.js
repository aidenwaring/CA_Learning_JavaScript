const rps = (player1, player2) => {
  // Your code here
  if (player1 == "Paper") {
    if (player2 == "Rock") {
      return "The winner is Player1"
    } else if (player2 == "Scissors") {
      return "The winner is Player2"
    } else {
      return "It's a draw"
    }
  }
  if (player1 == "Scissors") {
    if (player2 == "Rock") {
      return "The winner is Player2"
    } else if (player2 == "Paper") {
      return "The winner is Player1"
    } else {
      return "It's a draw"
    }
  }
}

console.log(rps("Paper", "Paper"))