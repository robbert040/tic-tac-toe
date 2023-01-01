import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import styles from './styles';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  icon: string;
  text: string;
}

function Alert(props: Props) {
  const { visible, setVisible, icon, text } = props;

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
      <TouchableOpacity style={styles.alertButton} onPress={() => {}}>
        <Text style={styles.alertButtonText}>New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alertButtonExit} onPress={() => {}}>
        <Text style={styles.alertButtonText}>Exit</Text>
      </TouchableOpacity>
    </FancyAlert>
  );
}

export default Alert;
