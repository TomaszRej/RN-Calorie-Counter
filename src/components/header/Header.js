import React from 'react';
import { vars } from 'src/variables/extendedStyleheetVariables';
import { fontWeights } from 'src/variables/fontWeights';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from 'src/components/header/styles';

const Header = props => {
	return (
		<SafeAreaView>
			<View style={styles.headerContainer}>
				<View>
					<Text style={{ fontWeight: fontWeights.bold }}>
						{props.scene.route.name}
					</Text>
				</View>
				<View style={styles.headerIcons}>
					<TouchableOpacity
						onPress={() => props.scene.descriptor.navigation.openDrawer()}>
						<Icon
							style={styles.headerIcon}
							name="menu"
							size={24}
							color={vars.$progressBarLight}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log('bell')}>
						<Icon
							style={styles.headerIcon}
							name="bell"
							size={24}
							color={vars.$progressBarLight}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Header;


