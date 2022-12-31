import { useContext, useMemo } from 'react';

import { GameContext } from './context';

const useGame = () => {
  const { game, setGame } = useContext(GameContext);

  return useMemo(
    () => ({
      game,
      setGame,
    }),
    [game, setGame]
  );
};

export default useGame;
