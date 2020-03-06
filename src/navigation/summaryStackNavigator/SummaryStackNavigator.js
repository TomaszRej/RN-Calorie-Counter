import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SummaryScreen from 'src/screens/summaryScreen/SummaryScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from 'src/navigation/screens';



const SummaryNavigator = createStackNavigator();

const SummaryStack = () => {
  return (
    <SummaryNavigator.Navigator
      screenOptions={{
        header: (props) => {

          // todo Header  component
          return (
            <SafeAreaView>

              <View style={{
                padding: 10,
                borderWidth: 3,
                borderColor: 'blue',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <View><Text>{props.scene.route.name}</Text></View>
                <TouchableOpacity onPress={() => props.scene.descriptor.navigation.openDrawer()}><Icon name='menu'
                                                                                                       size={24}
                                                                                                       color={'red'}/></TouchableOpacity>
              </View>
            </SafeAreaView>
          );
        },
      }}>
      <SummaryNavigator.Screen
        name={Screens.SUMMARY}
        component={SummaryScreen}

        // options={}

      />
    </SummaryNavigator.Navigator>
  );
};

export default SummaryStack;
