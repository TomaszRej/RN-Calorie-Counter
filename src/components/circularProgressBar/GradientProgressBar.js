import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';


// import Nutrient from 'src/components/nutrient/Nutrient';


const GradientProgressBar = ({percentage, style}) => {
  const transition = <Transition.Change interpolation="easeInOut"/>;

  const [p, setP] = useState(0);
  const ref = useRef();


  useEffect(() => {
    setP(percentage);
    ref.current.animateNextTransition();
  }, [percentage]);

  return (

    <Transitioning.View
      ref={ref}
      style={{...style}}
      transition={transition}
    >
      <View style={styles.bar}>
        {/*<Nutrient label={'Fats'} value={percentage} color='blue'/>*/}
        <LinearGradient
          colors={[EStyleSheet.value('$progressBarDark'), EStyleSheet.value('$progressBarLight')]}
          start={{x: 0.3, y: 0}}
          end={{x: 1, y: 0}}
          style={EStyleSheet.flatten([styles.linearGradient, {width: `${p}%`}])}
        />

        <View style={EStyleSheet.flatten([styles.circle, {left: `${p}%`}])}/>
      </View>

    </Transitioning.View>

  );
};

const styles = EStyleSheet.create({
  bar: {
    marginTop: 30,
    height: 5,
    width: '100%',
    backgroundColor: '$progressBarDefault',

  },
  circle: {
    position: 'absolute',
    top: -5,
    backgroundColor: '$progressBarLight',
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  linearGradient: {
    height: 5,
    backgroundColor: '$progressBarDark',
    borderRadius: 10
  },
  nutrientsContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 50
  }
});

export default GradientProgressBar;
