import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { checkIfTheGameIsFinished, checkIfThereIsAWinner, GameStateProps } from '../../utils/game';
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
  const [showWinnerAlert, setShowWinnerAlert] = useState(false);
  const [showEndGameAlert, setShowEndGameAlert] = useState(false);

  useEffect(() => {
    const winner = checkIfThereIsAWinner(game);
    if (winner) {
      setShowWinnerAlert(true);
    }
    if (checkIfTheGameIsFinished(game)) {
      setShowEndGameAlert(true);
    }
  }, [game, setGame]);

  return (
    <>
      <FancyAlert
        visible={showWinnerAlert}
        icon={
          <View style={styles.alertIcon}>
            <Text>🏆</Text>
          </View>
        }
        style={styles.alert}
        onRequestClose={() => setShowWinnerAlert(false)}>
        <Text style={styles.alertText}>Winner {checkIfThereIsAWinner(game)}</Text>
        <TouchableOpacity style={styles.alertButton} onPress={() => {}}>
          <Text style={styles.alertButtonText}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertButtonExit} onPress={() => {}}>
          <Text style={styles.alertButtonText}>Exit</Text>
        </TouchableOpacity>
      </FancyAlert>
      <FancyAlert
        visible={showEndGameAlert}
        icon={
          <View style={styles.alertIcon}>
            <Text>❌</Text>
          </View>
        }
        style={styles.alert}
        onRequestClose={() => setShowEndGameAlert(false)}>
        <Text style={styles.alertText}>No winner</Text>
        <TouchableOpacity style={styles.alertButton} onPress={() => {}}>
          <Text style={styles.alertButtonText}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertButtonExit} onPress={() => {}}>
          <Text style={styles.alertButtonText}>Exit</Text>
        </TouchableOpacity>
      </FancyAlert>
      <FlatList
        data={game}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
        numColumns={3}
        extraData={game}
      />
    </>
  );
}

export default withPosition(Game);
