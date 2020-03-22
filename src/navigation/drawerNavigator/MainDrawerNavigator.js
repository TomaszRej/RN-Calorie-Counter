import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from '@react-navigation/drawer';
import Screens from 'src/navigation/screens';
import {styles} from 'src/navigation/drawerNavigator/styles';

const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent(props) {
	debugger
	return (
		<DrawerContentScrollView 
		{...props}>
			<Text> avatar</Text>
			{props.state.routes.map(route=>{
				props.navigation
			return (
				<DrawerItem
					label={({ focused }) =>
							<View 
								style={styles.drawerItemContainer}>
								<Text>{route.name}</Text>
								<Icon name="chevron-right" size={30} color="green" />
							</View>
							}
					onPress={() => props.navigation.navigate(props.state.routeNames[props.state.routes.indexOf(route)])}
				/>
			)
			}
			)}
		</DrawerContentScrollView>
	);
}

export const MainDrawerNavigator = () => {
	return (
		<DrawerNavigator.Navigator
			initialRouteName={Screens.SUMMARY.title}
			drawerPosition="right"
			drawerWidth={'85%'}
			drawerContent={props => <CustomDrawerContent {...props} />}
			>
			{Object.values(Screens).map(el=>{
				console.log(el.title)
				return(
					<DrawerNavigator.Screen
						name={el.title} 
						component={el.component ?? EmptyComponent} 
					/>
				)
				})}
		</DrawerNavigator.Navigator>
	);
};

const EmptyComponent = () => <View><Text>No component</Text></View>

