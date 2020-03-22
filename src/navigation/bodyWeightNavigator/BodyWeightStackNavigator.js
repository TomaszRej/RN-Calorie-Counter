
import React from 'react';
import BodyWeightScreen from 'src/screens/bodyWeightScreen/BodyWeightScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from 'src/navigation/screens';

import Header from 'src/components/header/Header';

const BodyWeightNavigator = createStackNavigator();

const BodyWeightStack = () => {
  return (
    <BodyWeightNavigator.Navigator
      screenOptions={{
        header: props => <Header {...props} onPress={props.scene.descriptor.navigation.openDrawer} routeName={props.scene.route.name} />
      }}>
      <BodyWeightNavigator.Screen
        name={Screens.BODYWEIGHT}
        component={BodyWeightScreen}
      />
    </BodyWeightNavigator.Navigator>
  );
};

export default BodyWeightStack;
