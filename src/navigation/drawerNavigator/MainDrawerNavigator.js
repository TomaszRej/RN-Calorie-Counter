import React from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import Screens from "src/navigation/screens";
import SummaryStack from "src/navigation/summaryStackNavigator/SummaryStackNavigator";




const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent(props) {


  return (


    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <Text> avatar</Text>
      <DrawerItem
        // icon={() => }
        label={      ({ focused}) => <View style={{flexDirection: 'row', width: '85%',justifyContent: 'space-between', alignItems: 'center'}}>
          <View><Text>Summary</Text></View>
          <View ><Icon name="chevron-right" size={30} color="blue" /></View>
        </View>}



        onPress={() => props.navigation.navigate('Summary')}
        style={{backgroundColor: 'red'}}
      />
    </DrawerContentScrollView>
  );
}

export const MainDrawerNavigator = () => {

  return (
    <DrawerNavigator.Navigator

      initialRouteName={Screens.SUMMARY}
      // screenOption={{}}
      drawerPosition="right"
      drawerStyle={{
        width: '85%',
      }}


      drawerContent={props => <CustomDrawerContent {...props} />}


    >
      < DrawerNavigator.Screen
        name={Screens.SUMMARY}
        component={SummaryStack}
      />
    </DrawerNavigator.Navigator>
  );
};





