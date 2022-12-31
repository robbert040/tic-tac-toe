import { useContext, useMemo } from 'react';

import { GameContext } from './context';

const useGame = () => {
  const { game, setGame, player, setPlayer } = useContext(GameContext);

  return useMemo(
    () => ({
      game,
      setGame,
      player,
      setPlayer,
    }),
    [game, setGame, player, setPlayer]
  );
};

export default useGame;
