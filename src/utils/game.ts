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

export const checkIfThereIsAWinner = () => {};

export const checkIfTheGameIsFinished = (game: Array<GameStateProps>) => {
  let emptyValues = 0;

  game.forEach(cell => {
    if (!cell.value) {
      emptyValues += 1;
    }
  });

  return !!emptyValues;
};
