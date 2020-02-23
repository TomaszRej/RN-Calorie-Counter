import React from 'react';
import AppNavigator from 'src/navigation/AppNavigator';
import EStyleSheet from 'react-native-extended-stylesheet';
import {vars} from 'src/variables/extendedStyleheetVariables';

EStyleSheet.build(vars);

const App = () => {
  return (
    <AppNavigator/>
  );
};


export default App;
