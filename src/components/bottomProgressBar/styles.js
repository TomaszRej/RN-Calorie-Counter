import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  bar: {
    marginTop: 30,
    height: 5,
    width: '100%',
    backgroundColor: '$progressBarDefault',
    zIndex: 1
  },
  circle: {
    position: 'absolute',
    top: -5,
    backgroundColor: '$progressBarLight',
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  linearGradient: {
    height: 5,
    backgroundColor: '$progressBarDark',
    borderRadius: 10,
  },
  nutrientsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
});