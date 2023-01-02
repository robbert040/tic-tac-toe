import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: width * 0.6,
    width: width * 0.6,
    margin: width * 0.2,
    marginTop: width * 0.15,
    marginBottom: width * 0.15,
  },
});

export default styles;
