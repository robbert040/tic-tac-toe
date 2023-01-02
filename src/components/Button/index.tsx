import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  gameMode: string;
}

function Button(props: Props) {
  const { text, gameMode } = props;

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(
          'Game' as never,
          {
            gameMode,
          } as never
        )
      }
      style={({ pressed }) => (pressed ? styles.containerPressed : styles.container)}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default Button;
