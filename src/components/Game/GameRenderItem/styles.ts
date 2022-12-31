import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

interface Props {
  x: number;
  y: number;
}

const createStyles = ({ x, y }: Props) =>
  StyleSheet.create({
    container: {
      height: (width - 60) * 0.333,
      width: (width - 60) * 0.333,
      justifyContent: 'center',
      borderLeftWidth: x > 0 ? 4 : 0,
      borderTopWidth: y > 0 ? 4 : 0,
      borderColor: 'black',
      border: 'solid',
    },
    text: {
      textAlign: 'center',
      fontSize: 72,
    },
  });

export default createStyles;
