import React from 'react';

import SummaryScreen from 'src/screens/summaryScreen/SummaryScreen';
import BodyWeightScreen from 'src/screens/bodyWeightScreen/BodyWeightScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from 'src/navigation/screens';

import Header from 'src/components/header/Header';
import BodyWeightStack from '../bodyWeightNavigator/BodyWeightStackNavigator';

const SummaryNavigator = createStackNavigator();

const SummaryStack = () => {
	return (
		<SummaryNavigator.Navigator
			screenOptions={{
				header: props => <Header {...props} onPress={props.scene.descriptor.navigation.openDrawer} routeName={props.scene.route.name}/>
			}}>
			<SummaryNavigator.Screen
				name={Screens.SUMMARY.title}
				component={SummaryScreen}
			/>
		</SummaryNavigator.Navigator>
	);
};

export default SummaryStack;

