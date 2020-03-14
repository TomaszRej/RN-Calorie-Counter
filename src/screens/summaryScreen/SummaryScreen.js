import React, {useState} from 'react';
import {View, Button} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'src/components/text/Text';
import Nutrient from 'src/components/nutrient/Nutrient';
import ProgressBar from 'src/components/progressBar/ProgressBar';
import GradientProgressBar from 'src/components/circularProgressBar/GradientProgressBar';
import MealsList from 'src/components/mealsList/MealsList/MealsList';
import TestComponent from 'src/components/testComponent/testComponent';


const dataTest = [
  {
    id: 1,
    mealTitle: 'Breakfaast',
    totalCalories: 300,
    ingredients: [{id: 1, value: 'a'}, {id: 2, value: 'b'}, {id: 3, value: 'c'}, {id: 4, value: 'd'}, {
      id: 5,
      value: 'e',
    }],
  },
  {
    id: 2,
    mealTitle: 'Dinner',
    totalCalories: 500,
    ingredients: [{id: 1, value: 'a'}, {id: 2, value: 'b'}],
  },
];

const SummaryScreen = () => {

  const [percentage, setPercentage] = useState(10);

  return (
    <View >
      <Button title={'add +10'} onPress={() => setPercentage(p => p + 10)}/>
      {/*<Text weight={'bold'} size={'h1'}>Summary screen</Text>*/}
      {/*<Text align={'center'} textType={'italic'}>Summary screen</Text>*/}
      {/*<Icon name="dots-vertical" size={30} color="red"/>*/}
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Nutrient color='red' label='Protein' value={percentage}/>
        <Nutrient color='blue' label='Fats' value={percentage}/>
        <Nutrient color='yellow' label='Carbs' value={percentage}/>
      </View>


      <MealsList data={dataTest} style={{paddingHorizontal: 15, paddingTop: 30,paddingBottom: 30}}/>

      {/*<GradientProgressBar percentage={percentage}/>*/}

    </View>
  );
};


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  test: {
    height: 10,
    width: 200,
    backgroundColor: '$progressBarDark',
  },
});

export default SummaryScreen;




