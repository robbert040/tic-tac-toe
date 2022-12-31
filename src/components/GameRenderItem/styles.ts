import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: width * 0.3,
    width: width * 0.3,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 72,
  },
});

export default styles;
