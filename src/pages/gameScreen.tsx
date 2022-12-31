import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import GameRenderItem from '../components/GameRenderItem';
import { GameStateProps, initialGameState } from '../utils/game';

const renderItem = ({ item }: { item: GameStateProps }) => {
  return <GameRenderItem item={item} />;
};

const keyExtractor = (item: GameStateProps) => {
  return `${item.x} ${item.y}`;
};

function GameScreen() {
  const [gameValues, setGameValues] = useState(initialGameState);

  return (
    <View>
      <FlatList
        data={gameValues}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={3}
      />
    </View>
  );
}

export default GameScreen;
