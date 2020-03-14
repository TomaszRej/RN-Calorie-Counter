import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$bgColor',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  labelAndValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelContainer: {
    paddingRight: 30,
  },
  barBackground: {
    marginTop: 5,
    height: 5,
    width: '100%',
    backgroundColor: '$progressBarDefault',
    borderRadius: 10,
  },
  barBackgroundPause: {
    backgroundColor: 'white',
    height: 5,
    width: 5,
    position: 'absolute',
    right: 10,

  },
  mute: {
    color: 'grey',
  },
});

