import React from 'react';
import { Pressable, Text } from 'react-native';
import { GameStateProps } from '../../utils/game';
import styles from './styles';

function GameRenderItem({ item }: { item: GameStateProps }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>
        {item.y}
        {item.x}
      </Text>
    </Pressable>
  );
}

export default GameRenderItem;
