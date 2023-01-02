import React from 'react';
import { View, Image } from 'react-native';
import Button from '../components/Button/index';
import Logo from '../components/Logo';

function HomeScreen() {
  return (
    <View>
      <Logo />
      <Button text="Single Player" gameMode="1Player" />
      <Button text="Two Player" gameMode="2Player" />
    </View>
  );
}

export default HomeScreen;
