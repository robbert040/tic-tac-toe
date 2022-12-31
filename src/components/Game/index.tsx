import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { GameStateProps, initialGameState } from '../../utils/game';
import GameRenderItem from './GameRenderItem';
import styles from './styles';

const renderItem = ({ item }: { item: GameStateProps }) => {
  return <GameRenderItem item={item} />;
};

const keyExtractor = (item: GameStateProps) => {
  return `${item.x} ${item.y}`;
};

function Game() {
  const [gameValues, setGameValues] = useState(initialGameState);

  return (
    <FlatList
      data={gameValues}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      numColumns={3}
    />
  );
}

export default Game;
