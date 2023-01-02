import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

function Logo() {
  return <Image source={require('../../../assets/icon.png')} style={styles.container} />;
}

export default Logo;
