import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { GameStateProps } from '../../../utils/game';
import createStyles from './styles';

interface props {
  item: GameStateProps;
}

function GameRenderItem(props: props) {
  const { item } = props;
  const { x, y, value } = item;

  const styles = useMemo(() => createStyles({ x, y }), [x, y]);

  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

export default GameRenderItem;
