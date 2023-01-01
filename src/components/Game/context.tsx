import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { GameStateProps, initialGameState } from '../../utils/game';

interface Context {
  game: Array<GameStateProps>;
  setGame: Dispatch<SetStateAction<Array<GameStateProps>>>;
  player: number;
  setPlayer: Dispatch<SetStateAction<number>>;
}

export const GameContext = createContext<Context>({
  game: [...initialGameState],
  setGame: () => {},
  player: 1,
  setPlayer: () => {},
});

export const GameContextProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [game, setGame] = useState<Array<GameStateProps>>([...initialGameState]);
  const [player, setPlayer] = useState<number>(1);

  return useMemo(
    () => (
      <GameContext.Provider
        value={{
          game,
          setGame,
          player,
          setPlayer,
        }}>
        {children}
      </GameContext.Provider>
    ),
    [children, game, player]
  );
};
