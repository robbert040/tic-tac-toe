import React, { useCallback, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { GameStateProps } from '../../../utils/game';
import useGame from '../useGame';
import createStyles from './styles';

interface props {
  item: GameStateProps;
}

function GameRenderItem(props: props) {
  const { item } = props;
  const { x, y, value } = item;

  const styles = useMemo(() => createStyles({ x, y }), [x, y]);
  const { setGame, game, setPlayer, player } = useGame();

  const onPress = useCallback(() => {
    if (value) {
      return;
    }

    const oldGameState = [...game];
    const index = oldGameState.findIndex(
      oldGameStateItem => oldGameStateItem.x === x && oldGameStateItem.y === y
    );

    oldGameState[index].value = player === 1 ? 'X' : 'O';

    setGame(oldGameState);
    setPlayer(player === 1 ? 2 : 1);
  }, [x, y, setGame, game, player, setPlayer, value]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

export default GameRenderItem;
