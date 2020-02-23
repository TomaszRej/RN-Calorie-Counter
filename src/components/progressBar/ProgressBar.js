import React, {Component} from 'react';
import {View} from 'react-native';
import Animated, {Value, timing, Easing, concat} from 'react-native-reanimated';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from 'src/components/text/Text';
import LinearGradient from 'react-native-linear-gradient';


class AnimatedLinearGradient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      transX: new Value(0)

    }
  }

  componentDidMount() {
    this._config = {
      duration: 500,
      toValue: this.props.p,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.transX, this._config).start();
  }

  componentDidUpdate() {
    this._config = {
      duration: 500,
      toValue: this.props.p,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.transX, this._config).start();
  }


  setNativeProps = (props) => {
    this.linearGradient.setNativeProps(props)
  };

  render(){
    return(
      <LinearGradient
        ref={(ref) => {this.linearGradient = ref}}
        colors={[EStyleSheet.value('$progressBarDark'), EStyleSheet.value('$progressBarLight')]}
        start={{x: 0.3, y: 0}}
        end={{x: 1, y: 0}}
        style={EStyleSheet.flatten([styles.linearGradient, {width: this.state.transX}])}
      />
    )
  }

}


class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transX: new Value(0),
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

    timing(this.state.transX, this._config).start();
  }

  render() {

    const AnimatedGradient = Animated.createAnimatedComponent(AnimatedLinearGradient);


    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, {width: concat(this.state.transX, '%')}]}
        />

        {/*  /!*<Text>test teks</Text>*!/*/}
        {/*  <View style={styles.bar}>*/}
        {/*    /!*<Nutrient label={'Fats'} value={percentage} color='blue'/>*!/*/}

        {/*    <View style={EStyleSheet.flatten([styles.circle, {left: `${p}%`}])}/>*/}
        {/*  </View>*/}
        {/*</Animated.View>*/}

        {/*<AnimatedGradient color='blue' p={this.props.progress}/>*/}

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
