import React, { useState } from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'src/components/text/Text';
import Nutrient from 'src/components/nutrient/Nutrient';
import ProgressBar from 'src/components/progressBar/ProgressBar';
import GradientProgressBar from 'src/components/circularProgressBar/GradientProgressBar';
import MealsList from 'src/components/mealsList/MealsList';
import TestComponent from 'src/components/testComponent/testComponent';

const SummaryScreen = () => {
	const [percentage, setPercentage] = useState(10);

	return (
		<SafeAreaView>
			<View>
				<Text>We are on bodyweight screen</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	test: {
		height: 10,
		width: 200,
		backgroundColor: '$progressBarDark'
	}
});

export default SummaryScreen;
