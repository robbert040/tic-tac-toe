import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button/index';

function HomeScreen() {
  return (
    <View>
      <Button text="Single Player" gameMode="1Player" />
      <Button text="Two Player" gameMode="2Player" />
    </View>
  );
}

export default HomeScreen;
