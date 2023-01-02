import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { nextMoveComputer } from '../../../utils/game';
import useGame from '../useGame';

function useGameLogic() {
  const navigation = useNavigation();
  const { game, setGame, player, setPlayer } = useGame();
  const { gameMode } = navigation.getState().routes[navigation.getState().index].params;

  useEffect(() => {
    if (gameMode === '1Player' && player === 2) {
      const nextMove = nextMoveComputer(game);

      if (nextMove) {
        const oldGameState = [...game];
        const index = oldGameState.findIndex(
          oldGameStateItem => oldGameStateItem.x === nextMove.x && oldGameStateItem.y === nextMove.y
        );

        oldGameState[index].value = 'O';

        setGame(oldGameState);
        setPlayer(1);
      }
    }
  }, [player, game, gameMode, setGame, setPlayer]);
}

export default useGameLogic;
