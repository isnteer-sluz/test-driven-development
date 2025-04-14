export function play(player1: string, player2: string): number {

  const p1 = normalize(player1);
  const p2 = normalize(player2);

  const allowedMoves = ["rock", "scissors", "paper"];

  if (!allowedMoves.includes(p1) || !allowedMoves.includes(p2)) {
  throw new Error("Invalid move");
  }

  if (p1 === p2) return 0;

  // All cases where 1 beats 2 (rock, scissors || paper, rock || scissors, paper) return 1
  if ((p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || (p1 === "scissors" && p2 === "paper")) {
    return 1;
  } else {
    return 2;
  };

};

function normalize(move: string): string {
  return move.trim().toLowerCase();
};