import React, {useState} from 'react';
import {View, Button} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'src/components/text/Text';
import Nutrient from 'src/components/nutrient/Nutrient';
import ProgressBar from 'src/components/progressBar/ProgressBar';
import GradientProgressBar from 'src/components/circularProgressBar/GradientProgressBar'

import MealsList from "src/components/mealsList/MealsList";
import TestComponent from "src/components/testComponent/testComponent"


const SummaryScreen = () => {

  const [percentage, setPercentage] = useState(10);


  return (
    <View >
      <Button title={'add +10'} onPress={() => setPercentage(p => p + 10)}/>

      <TestComponent message='info'></TestComponent>
      {/*<Text weight={'bold'} size={'h1'}>Summary screen</Text>*/}
      {/*<Text align={'center'} textType={'italic'}>Summary screen</Text>*/}
      {/*<Icon name="dots-vertical" size={30} color="red"/>*/}


      <MealsList/>

      {/*<ProgressBar progress={percentage} />*/}
      {/*<GradientProgressBar percentage={percentage}/>*/}

    </View>
  );
};


const styles = EStyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  test: {
    height: 10,
    width: 200,
    backgroundColor: '$progressBarDark',
  },
});

export default SummaryScreen;


