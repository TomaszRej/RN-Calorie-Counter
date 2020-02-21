import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainDrawerNavigator} from 'src/navigation/drawerNavigator/MainDrawerNavigator';


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainDrawerNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;
