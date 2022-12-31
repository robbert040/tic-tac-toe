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
}

export const GameContext = createContext<Context>({
  game: initialGameState,
  setGame: () => {},
});

export const GameContextProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [game, setGame] = useState<Array<GameStateProps>>(initialGameState);

  return useMemo(
    () => (
      <GameContext.Provider
        value={{
          game,
          setGame,
        }}>
        {children}
      </GameContext.Provider>
    ),
    [children, game]
  );
};
