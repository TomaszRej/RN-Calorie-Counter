import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	drawerMainContainer: {
		// flexDirection: 'row',
		width: '85%',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		borderColor:'red',
		borderWidth: 1,
		// overflow: 'hidden'
	},
	drawerItemContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1,
		width: '70%'
	},
	iconContainer: {
		borderColor: 'black',
		borderWidth: 2,
		width: 22,
		height: 22,
		borderRadius: 20
	},
	sizes:{
		width: '85%'
	}
});
