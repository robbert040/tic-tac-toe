import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  checkIfTheGameIsFinished,
  checkIfThereIsAWinner,
  GameStateProps,
  nextMoveComputer,
} from '../../utils/game';
import GameRenderItem from './GameRenderItem';
import withPosition from './withContext';
import styles from './styles';
import useGame from './useGame';
import Alert from '../Alert';

const renderItem = ({ item }: { item: GameStateProps }) => {
  return <GameRenderItem item={item} />;
};

const keyExtractor = (item: GameStateProps) => {
  return `${item.x} ${item.y}`;
};

function Game() {
  const { game, setGame, player, setPlayer } = useGame();
  const [showWinnerAlert, setShowWinnerAlert] = useState(false);
  const [showEndGameAlert, setShowEndGameAlert] = useState(false);

  const navigation = useNavigation();
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
      <Alert
        visible={showWinnerAlert}
        setVisible={() => setShowWinnerAlert(false)}
        icon="🏆"
        text={`Winner ${checkIfThereIsAWinner(game)}`}
      />
      <Alert
        visible={showEndGameAlert}
        setVisible={() => setShowEndGameAlert(false)}
        icon="❌"
        text="No winner"
      />
      <Text style={styles.text}>Player {player} is on</Text>
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
