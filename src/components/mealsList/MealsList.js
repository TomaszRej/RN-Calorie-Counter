import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/components/text/Text';
import Animated, {Value, timing, Easing, concat} from 'react-native-reanimated';

const data = [{id: 1, mealTitle: 'Breakfaast', totalCalories: 300}, {id: 2, mealTitle: 'Dinner', totalCalories: 500}];


class MealsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIngredients: 0,
      anim: new Value(0),
      animValues: {},

    };
  }

  componentDidMount(){

    let animValues = {};

    for(const item of data ){
      animValues[item.id] =  new Value(0)
    }


    this.setState({
      animValues: animValues
    });
  }

  handleOnPress = (item) => {
    console.log(this.state.showIngredients, item.id);


    if (this.state.showIngredients == item.id) {
      this.setState({showIngredients: 0}, () => {
        this.animationUp(item.id);
      });

      return;
    }
    this.setState({showIngredients: item.id}, () => {
      this.animationDown(item.id);
    });


  };

  animationDown(id) {
    this._config = {
      duration: 500,
      toValue: 100,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animValues[id], this._config).start();
  }

  animationUp(id) {
    this._config = {
      duration: 500,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animValues[id], this._config).start();
  }

  renderItem = ({item}) => {

console.log(this.state.animValues[item.id]);


    return <>
      <TouchableOpacity onPress={() => this.handleOnPress(item)}>
        <Text>'test'{item.id}</Text>
      </TouchableOpacity>


      <Animated.View style={{backgroundColor: 'pink', height: concat(this.state.animValues[item.id], '%')}}>
        <Text>this.state.showIngredients {item.id}</Text></Animated.View>


    </>
      ;
  };


  render() {

    return (
      <View >
        <Text>
          test listy {this.state.showIngredients}
        </Text>
        <FlatList data={data} renderItem={item => this.renderItem(item)}/>
      </View>
    );
  }
}

export default MealsList;
