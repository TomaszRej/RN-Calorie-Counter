import React from 'react';

import SummaryScreen from 'src/screens/summaryScreen/SummaryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from 'src/navigation/screens';

import Header from 'src/components/header/Header';

const SummaryNavigator = createStackNavigator();

const SummaryStack = () => {
	return (
		<SummaryNavigator.Navigator
			screenOptions={{
				header: props => <Header {...props} onPress={props.scene.descriptor.navigation.openDrawer} routeName={props.scene.route.name}/>
			}}>
			<SummaryNavigator.Screen
				name={Screens.SUMMARY}
				component={SummaryScreen}
			/>
		</SummaryNavigator.Navigator>
	);
};

export default SummaryStack;

