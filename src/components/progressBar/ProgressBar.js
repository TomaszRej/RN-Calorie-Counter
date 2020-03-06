import React, {Component} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import EStyleSheet from 'react-native-extended-stylesheet';


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
      easing: Easing.inOut(Easing.ease),
    };
    Animated.timing(this.state.transX, this._config).start();
  }

  render() {
    const {color} = this.props;
    return (
      <Animated.View
        style={[styles.box,
          {width: Animated.concat(this.state.transX, '%')},
          {backgroundColor: color ? color : EStyleSheet.value('$progressBarDark')}]
        }
      />
    );
  }
}

const styles = EStyleSheet.create({
  box: {
    height: 5,
    borderRadius: 30,
  },
});

export default ProgressBar;
