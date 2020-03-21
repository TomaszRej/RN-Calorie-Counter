import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';


const BottomProgressBar = ({percentage, style}) => {
  const transition = <Transition.Change interpolation="easeInOut" />;
  const [p, setP] = React.useState(0);
  const [flag, setFlag] = React.useState(false)
  const ref = React.useRef();

  React.useEffect(() => {
    setP(percentage);
    setFlag(f => !f)
  }, [percentage]);

  React.useEffect(() => {
    ref.current.animateNextTransition();
  },[flag])
  return (
    <Transitioning.View
      ref={ref}
      style={{zIndex: 1, ...style}}
      transition={transition}>
      <View style={styles.bar}>
        <LinearGradient
          colors={[
            EStyleSheet.value('$progressBarDark'),
            EStyleSheet.value('$progressBarLight'),
          ]}
          start={{x: 0.3, y: 0}}
          end={{x: 1, y: 0}}
          style={EStyleSheet.flatten([styles.linearGradient, {width: `${p}%`}])}
        />
        <View style={EStyleSheet.flatten([styles.circle, {left: `${p}%`}])} />
      </View>
    </Transitioning.View>
  );
};


export default BottomProgressBar;
