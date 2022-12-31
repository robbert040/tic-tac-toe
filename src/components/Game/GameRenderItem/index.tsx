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
  const { setGame, game } = useGame();

  const onPress = useCallback(() => {
    const oldGameState = [...game];
    const index = oldGameState.findIndex(
      oldGameStateItem => oldGameStateItem.x === x && oldGameStateItem.y === y
    );

    oldGameState[index].value = 'X';

    setGame(oldGameState);
  }, [x, y, setGame, game]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

export default GameRenderItem;
