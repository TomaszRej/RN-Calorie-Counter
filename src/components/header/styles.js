import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  headerContainer: {
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    // borderBottomWidth:1,
    // borderWidth: 3,
    // borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: '$bgColor'
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerIcon: {
    marginHorizontal: 10
  }
});