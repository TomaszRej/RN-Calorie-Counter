import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  shadow: {
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainer: {
    backgroundColor: '$white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {width: 50, height: 50},
  leftContent: {
    flexDirection: 'row',
  },
  iconBorder: {
    borderColor: '$borderGray',
    borderWidth: 3,
    borderRadius: 10,
    margin: 15,
  },
});
