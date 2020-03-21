import React, {useState} from 'react';
import {View, Button, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'src/components/text/Text';
import Nutrient from 'src/components/nutrient/Nutrient';
import ProgressBar from 'src/components/progressBar/ProgressBar';
import MealsList from 'src/components/mealsList/mealsList/MealsList.tsx';
import TestComponent from 'src/components/testComponent/testComponent';
import BottomProgressBar from 'src/components/bottomProgressBar/BottomProgressBar';
import BottomTabs from 'src/components/bottomTabs/BottomTabs';

const dataTest = [
  {
    id: 1,
    mealTitle: 'Breakfaast',
    totalCalories: 300,
    ingredients: [
      {id: 1, value: 'a'},
      {id: 2, value: 'b'},
      {id: 3, value: 'c'},
      {id: 4, value: 'd'},
      {
        id: 5,
        value: 'e',
      },
    ],
  },
  {
    id: 2,
    mealTitle: 'Dinner',
    totalCalories: 500,
    ingredients: [
      {id: 1, value: 'a'},
      {id: 2, value: 'b'},
    ],
  },
];

import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 1143 584"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}>
      <Path
        d="M7.292 212.647c136.31 0 340.775-52.4 408.93 0 68.155 52.4-75.85 261.98 0 314.38 75.85 52.4 379.253 78.66 455.103 0 75.84-78.66-40.98-393.3 0-471.961 37.86-72.689 204.9-54.03 245.88 0 40.98 54.031 0 216.121 0 324.181"
        fill="none"
        stroke="#000"
        strokeWidth={14.58}
      />
    </Svg>
  );
}

const SummaryScreen = () => {
  const [percentage, setPercentage] = useState(10);

  return (
    <>
      <ScrollView>
        <SvgComponent style={{width: 300, height: 300}} />
        <Button title={'add +10'} onPress={() => setPercentage(p => p + 10)} />
        {/*<Text weight={'bold'} size={'h1'}>Summary screen</Text>*/}
        {/*<Text align={'center'} textType={'italic'}>Summary screen</Text>*/}
        {/*<Icon name="dots-vertical" size={30} color="red"/>*/}
        <View style={{flexDirection: 'row', width: '100%'}}>
          <Nutrient color="red" label="Protein" value={percentage} />
          <Nutrient color="blue" label="Fats" value={percentage} />
          <Nutrient color="yellow" label="Carbs" value={percentage} />
        </View>

        <MealsList
          data={dataTest}
          style={{paddingHorizontal: 15, paddingTop: 30, paddingBottom: 30}}
        />
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <BottomProgressBar percentage={percentage}/>
        <BottomTabs />
      </View>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  test: {
    height: 10,
    width: 200,
    backgroundColor: '$progressBarDark',
  },
});

export default SummaryScreen;
