import React from 'react';
import { vars } from 'src/variables/extendedStyleheetVariables';
import { fontWeights } from 'src/variables/fontWeights';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from 'src/components/header/styles';

const Header = props => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.headerContainer}>
				<View>
					<Text style={{ fontWeight: fontWeights.bold }}>
						{props.routeName}
					</Text>
				</View>
				<View style={styles.headerIcons}>
					<TouchableOpacity
						onPress={() => props.onPress()}>
						<Icon
							style={styles.headerIcon}
							name="menu"
							size={24}
							color={vars.$progressBarDark}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log('bell')}>
						<Icon
							style={styles.headerIcon}
							name="bell"
							size={24}
							color={vars.$progressBarDark}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Header;


