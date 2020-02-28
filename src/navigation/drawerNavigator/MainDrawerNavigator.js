import React from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import SummaryScreen from 'src/screens/summaryScreen/SummaryScreen';


const SummaryNavigator = createStackNavigator();

export const SummaryStack = () => {
  return (
    <SummaryNavigator.Navigator  
      screenOptions={{
      header: (props) => {

        debugger
        return (
        <SafeAreaView>
          <View  style={{padding: 10,borderWidth:3,borderColor: 'blue', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View><Text>{props.scene.route.name}</Text></View>
            <TouchableOpacity onPress={() => props.scene.descriptor.navigation.openDrawer()}><Icon name='menu' size={24} color={'red'}/></TouchableOpacity>
          </View>
        </SafeAreaView>)
      }
    }}>
      <SummaryNavigator.Screen
        name="Summary"
        component={SummaryScreen}

        // options={}

      />
    </SummaryNavigator.Navigator>
  );
};

// DRAWER NAVIGATOR

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

      initialRouteName="Summary"
      // screenOption={{}}
      drawerPosition="right"
      drawerStyle={{
        width: '85%',
      }}


      drawerContent={props => <CustomDrawerContent {...props} />}


    >
      < DrawerNavigator.Screen
        name='Summary'
        component={SummaryStack}
      />
    </DrawerNavigator.Navigator>
  );
};





