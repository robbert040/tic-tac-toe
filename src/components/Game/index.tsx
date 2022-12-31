import React from 'react';
import { FlatList } from 'react-native';
import { GameStateProps } from '../../utils/game';
import GameRenderItem from './GameRenderItem';
import withPosition from './withContext';
import styles from './styles';
import useGame from './useGame';

const renderItem = ({ item }: { item: GameStateProps }) => {
  return <GameRenderItem item={item} />;
};

const keyExtractor = (item: GameStateProps) => {
  return `${item.x} ${item.y}`;
};

function Game() {
  const { game } = useGame();

  return (
    <FlatList
      data={game}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      numColumns={3}
    />
  );
}

export default withPosition(Game);
