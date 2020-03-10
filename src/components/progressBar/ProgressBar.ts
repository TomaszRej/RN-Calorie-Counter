import React, { Component } from 'react';
import Animated, { Easing} from 'react-native-reanimated';
import EStyleSheet from 'react-native-extended-stylesheet';
import { EasingFunction } from 'react-native';


interface ProgressBarProps {
	progress: number;
	color: string;
}
interface ProgressBarState {
	transX: Animated.Value<number>;
}
type ProgressConfig = {
	duration: number;
	toValue: number;
	easing: Animated.EasingFunction;
};

class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
	_config: ProgressConfig;
	constructor(props: ProgressBarProps) {
		super(props);

		this.state = {
			transX: new Animated.Value(0)
		};
		this._config = {
			duration: 500,
			toValue: this.props.progress,
			easing: Easing.inOut(Easing.ease)
		};
	}

	componentDidMount() {
		this.animation();
	}

	componentDidUpdate() {
		this.animation();
	}

	animation() {
		Animated.timing(this.state.transX, this._config).start();
	}

	render() {
    const { color } = this.props;
    const progressionStyle = { 
      width: Animated.concat(this.state.transX, '%'), 
      backgroundColor: color ? color : EStyleSheet.value('$progressBarDark') 
    }
		return (
			<Animated.View	style={{color:'red'}}/>
		);
	}
}

const styles = EStyleSheet.create({
	box: {
		height: 5,
		borderRadius: 30
	}
});

export default ProgressBar;
