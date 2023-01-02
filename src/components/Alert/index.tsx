import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import useGame from '../Game/useGame';
import styles from './styles';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  icon: string;
  text: string;
}

function Alert(props: Props) {
  const { visible, setVisible, icon, text } = props;
  const { setGame } = useGame();
  const navigation = useNavigation();

  return (
    <FancyAlert
      visible={visible}
      icon={
        <View style={styles.alertIcon}>
          <Text>{icon}</Text>
        </View>
      }
      style={styles.alert}
      onRequestClose={() => setVisible(false)}>
      <Text style={styles.alertText}>{text}</Text>
      <TouchableOpacity
        style={styles.alertButton}
        onPress={() => {
          setGame([
            {
              y: 0,
              x: 0,
              value: undefined,
            },
            {
              y: 0,
              x: 1,
              value: undefined,
            },
            {
              y: 0,
              x: 2,
              value: undefined,
            },
            {
              y: 1,
              x: 0,
              value: undefined,
            },
            {
              y: 1,
              x: 1,
              value: undefined,
            },
            {
              y: 1,
              x: 2,
              value: undefined,
            },
            {
              y: 2,
              x: 0,
              value: undefined,
            },
            {
              y: 2,
              x: 1,
              value: undefined,
            },
            {
              y: 2,
              x: 2,
              value: undefined,
            },
          ]);
          setVisible(false);
        }}>
        <Text style={styles.alertButtonText}>New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.alertButtonExit}
        onPress={() => {
          setVisible(false);
          navigation.goBack();
        }}>
        <Text style={styles.alertButtonText}>Exit</Text>
      </TouchableOpacity>
    </FancyAlert>
  );
}

export default Alert;
