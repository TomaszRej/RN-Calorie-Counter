import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SummaryScreen from 'src/screens/summaryScreen/SummaryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from 'src/navigation/screens';
import {vars} from 'src/variables/extendedStyleheetVariables';
import { fontWeights } from 'src/variables/fontWeights';
import EStyleSheet from 'react-native-extended-stylesheet';

const SummaryNavigator = createStackNavigator();

export const Header = props => {
	return (
		<SafeAreaView>
			<View
				style={
          styles.headerContainer
				}>
				<View >
          <Text style={{ fontWeight: fontWeights.bold }}>
						{props.scene.route.name}
					</Text>
				</View>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={() => props.scene.descriptor.navigation.openDrawer()}>
            <Icon style={styles.headerIcon} name="menu" size={24} color={vars.$progressBarLight} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('bell')}>
            <Icon style={styles.headerIcon} name="bell" size={24} color={vars.$progressBarLight} />
          </TouchableOpacity>
        </View>
			</View>
		</SafeAreaView>
	);
};

const SummaryStack = () => {
	return (
		<SummaryNavigator.Navigator
			screenOptions={{
				header: props => <Header {...props} />
			}}>
			<SummaryNavigator.Screen
				name={Screens.SUMMARY}
				component={SummaryScreen}
			/>
		</SummaryNavigator.Navigator>
	);
};

export default SummaryStack;

const styles = EStyleSheet.create ({
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
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: '$bgColor',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerIcon: {
    marginHorizontal: 10
  }

})