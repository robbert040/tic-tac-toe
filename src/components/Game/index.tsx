import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { checkIfTheGameIsFinished, GameStateProps } from '../../utils/game';
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
  const { game, setGame } = useGame();

  useEffect(() => {
    if (checkIfTheGameIsFinished(game)) {
      console.log('game over');
    }
  }, [game, setGame]);

  return (
    <FlatList
      data={game}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      numColumns={3}
      extraData={game}
    />
  );
}

export default withPosition(Game);
