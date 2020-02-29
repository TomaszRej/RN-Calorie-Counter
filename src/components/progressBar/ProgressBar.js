import React, {Component} from 'react';
import {View} from 'react-native';
import Animated, {Value, timing, Easing, concat} from 'react-native-reanimated';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from 'src/components/text/Text';
import LinearGradient from 'react-native-linear-gradient';



class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transX: new Animated.Value(0),
    };


  }

  componentDidMount() {
    this.animation();
  }

  componentDidUpdate() {
    this.animation();

  }

  animation() {
    this._config = {
      duration: 500,
      toValue: this.props.progress,
      easing: Animated.Easing.inOut(Animated.Easing.ease),
    };

    Animated.timing(this.state.transX, this._config).start();
  }

  render() {

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, {width: Animated.concat(this.state.transX, '%')}]}
        />

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
  },
  box: {
    height: 10,
    backgroundColor: '$progressBarDark',
    borderRadius: 30
  },
  linearGradient: {
    height: 5,
    backgroundColor: 'red',
  },
});

export default ProgressBar;
