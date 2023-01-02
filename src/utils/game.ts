export interface GameStateProps {
  y: number;
  x: number;
  value?: string;
}

export const initialGameState = [
  {
    y: 0,
    x: 0,
    value: undefined,
  },
  {
    y: 0,
    x: 1,
    value: undefined,
  },
  {
    y: 0,
    x: 2,
    value: undefined,
  },
  {
    y: 1,
    x: 0,
    value: undefined,
  },
  {
    y: 1,
    x: 1,
    value: undefined,
  },
  {
    y: 1,
    x: 2,
    value: undefined,
  },
  {
    y: 2,
    x: 0,
    value: undefined,
  },
  {
    y: 2,
    x: 1,
    value: undefined,
  },
  {
    y: 2,
    x: 2,
    value: undefined,
  },
];

export const checkIfThereIsAWinner = (game: Array<GameStateProps>) => {
  let winner = null;
  const players = ['X', 'O'];

  players.forEach(player => {
    if (game[0].value === player && game[1].value === player && game[2].value === player) {
      winner = player;
    }
    if (game[3].value === player && game[4].value === player && game[5].value === player) {
      winner = player;
    }
    if (game[6].value === player && game[7].value === player && game[8].value === player) {
      winner = player;
    }
    if (game[0].value === player && game[3].value === player && game[6].value === player) {
      winner = player;
    }
    if (game[1].value === player && game[4].value === player && game[7].value === player) {
      winner = player;
    }
    if (game[2].value === player && game[5].value === player && game[8].value === player) {
      winner = player;
    }
    if (game[0].value === player && game[4].value === player && game[8].value === player) {
      winner = player;
    }
    if (game[2].value === player && game[4].value === player && game[6].value === player) {
      winner = player;
    }
  });

  if (winner) {
    winner = winner === 'X' ? 'Player 1' : 'Player 2';
  }

  return winner;
};

export const checkIfTheGameIsFinished = (game: Array<GameStateProps>) => {
  let emptyValues = 0;

  game.forEach(cell => {
    if (!cell.value) {
      emptyValues += 1;
    }
  });

  return !emptyValues;
};

function checkForWinningMove(
  player: string,
  game: Array<GameStateProps>,
  possibleMoves: Array<GameStateProps>
) {
  let possibleMove = null;
  [...game].forEach(gameRow => {
    possibleMoves.forEach(gameRowPossible => {
      if (gameRowPossible.x === gameRow.x && gameRowPossible.y === gameRow.y) {
        gameRow.value = player;

        const isThereAWinner = checkIfThereIsAWinner([...game]);
        gameRow.value = undefined;

        if (!!isThereAWinner) {
          possibleMove = gameRowPossible;
        }
      }
    });
  });

  return possibleMove;
}

export const nextMoveComputer = (game: Array<GameStateProps>) => {
  const possibleMoves = [...game.filter(gameRow => !gameRow.value)];
  const amountOfPossibleMoves = possibleMoves.length - 1;

  // is there a move that beats the game
  const winningMove = checkForWinningMove('O', [...game], [...possibleMoves]);
  if (winningMove) {
    return winningMove;
  }

  // can the oponent do a move that can win the game
  const blockMove = checkForWinningMove('X', [...game], [...possibleMoves]);
  if (blockMove) {
    return blockMove;
  }

  return possibleMoves[Math.round(Math.random() * amountOfPossibleMoves)];
};
