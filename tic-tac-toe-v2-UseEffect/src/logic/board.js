import { WINNER_COMBOS } from "../constants"
  
export const checkWinnerFrom = (boardToCheck) => {
for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if ( boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c] && boardToCheck[a] !== null) {
    boardToCheck[a]
    console.log(boardToCheck[a]);return boardToCheck[a]
    }
}
return null
}
