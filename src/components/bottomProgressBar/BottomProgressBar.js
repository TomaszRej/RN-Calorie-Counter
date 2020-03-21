import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Animated, {Easing, concat} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

class BottomProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transX: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.animation(this.props.percentage);
  }

  componentDidUpdate() {
    this.animation(this.props.percentage);
  }

  animation() {
    Animated.timing(this.state.transX, {
      duration: 500,
      toValue: this.props.percentage,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  render() {
    const {style, percentage} = this.props;
    const Progress = Animated.createAnimatedComponent(LinearGradient);
    return (
      <Animated.View style={{zIndex: 1, ...style}}>
        <Animated.View style={styles.bar}>
          <Progress
            colors={[
              EStyleSheet.value('$progressBarDark'),
              EStyleSheet.value('$progressBarLight'),
            ]}
            start={{x: 0.3, y: 0}}
            end={{x: 1, y: 0}}
            style={[
              styles.linearGradient,
              {width: concat(this.state.transX, '%')},
            ]}
          />

          <Animated.View
            style={EStyleSheet.flatten([
              styles.circle,
              {left: concat(this.state.transX, '%')},
            ])}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}

export default BottomProgressBar;
