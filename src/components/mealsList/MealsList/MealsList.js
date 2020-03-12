import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View, Image} from 'react-native';
import {Text} from 'src/components/text/Text';
import Animated, {Value, timing, Easing, multiply, concat, divide, add} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import IngredientsList from 'src/components/mealsList/IngredientsList/IngredientsList';

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


class MealsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIngredients: new Value(0),
      isIngredientsListOpen: false,
      anim: new Value(0),
      animValues: {},
      data: [],

    };
  }

  componentDidMount() {
    let animValues = {};

    for (const item of dataTest) {
      animValues[item.id] = new Value(0);
    }
    ;


    this.setState({
      animValues: animValues,
      data: dataTest,
    });
  }

  toggleShow() {

    console.log('this.state.showIngredients');
    console.log(this.state.showIngredients);
    let value;
    this.setState({
      isIngredientsListOpen: !this.state.isIngredientsListOpen,
    }, () => {
      const config = {
        duration: 250,
        toValue: this.state.isIngredientsListOpen === true ? 0 : 1,
        easing: Easing.inOut(Easing.ease),
      };

      timing(this.state.showIngredients, config).start();
    });



  }

  handleOnPress = (item) => {

    this.toggleShow();


    // console.log(this.state.showIngredients, item.id);
    //
    //
    // if (this.state.showIngredients == item.id) {
    //   this.setState({showIngredients: 0}, () => {
    //     this.animationUp(item.id, item.ingredients.length);
    //   });
    //
    //   return;
    // }
    // this.setState({showIngredients: item.id}, () => {
    //   this.animationDown(item.id, item.ingredients.length);
    // });


  };

  animationDown(id, length) {


    this._config = {
      duration: 250,
      toValue: 15 * length,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animValues[id], this._config).start();
  }

  animationUp(id) {
    this._config = {
      duration: 250,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animValues[id], this._config).start();
  }

  handleDeleteIngredient(itemId, ingredientId, length) {
    const newData = this.state.data.map(item => {

      if (item.id === itemId) {
        item.ingredients = item.ingredients.filter(ingredient => ingredient.id !== ingredientId);
      }

      return item;

    });


    // todo animate when item is deleted from ingredients list
    this._config = {
      duration: 400,
      toValue: length === 1 ? 0 : 30 * (length - 1),
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animValues[itemId], this._config).start();

    this.setState({
      data: newData,
    });


  }

  renderItem = ({item}) => {

    console.log(this.state.animValues[item.id]);


    return <>
      <View
        style={[styles.shadow, styles.itemContainer]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // borderWidth: 1, borderColor: 'red',
        }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={{width: 50, height: 50}}


                source={require('../../../assets/images/kanpka1.png')}
              />

            </View>

            <TouchableOpacity onPress={() => this.handleOnPress(item)}>
              <Text>'test element listy'{item.id}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => alert('alert ikana wcisnieta')}>
            <Icon name="chevron-right" size={30} color="blue"/>
          </TouchableOpacity>
        </View>
        <IngredientsList animatedShowValue={this.state.showIngredients} values={this.state.animValues} id={item.id}
                         ingredients={item.ingredients}
                         onDelete={(id) => this.handleDeleteIngredient(item.id, id, item.ingredients.length)}/>
        {/*<Animated.View style={*/}
        {/*  {*/}

        {/*    height:*/}
        {/*      multiply(this.state.animValues[item.id], item.ingredients.length),*/}
        {/*  }*/}
        {/*}>*/}

        {/*  {item.ingredients.map((ingredient, index) => {*/}
        {/*    return <View*/}
        {/*      style={{*/}
        {/*        backgroundColor: index % 2 === 0 ? EStyleSheet.value('$gray'):EStyleSheet.value('$white')  ,*/}
        {/*        flexDirection: 'row',*/}
        {/*        justifyContent: 'space-between',*/}
        {/*        alignItems: 'center',*/}
        {/*        // width: concat(this.state.animValues[item.id], '%'),*/}
        {/*        // opacity: divide(this.state.animValues[item.id], 100),*/}
        {/*      }}>*/}
        {/*      <View>*/}
        {/*        <Text>{ingredient.value}</Text>*/}
        {/*        <Text>{ingredient.id}</Text>*/}
        {/*      </View>*/}

        {/*      <TouchableOpacity*/}
        {/*        onPress={() => this.handleDeleteIngredient(item.id, ingredient.id, item.ingredients.length)}>*/}
        {/*        <Icon name="close" size={30} color="blue"/>*/}
        {/*      </TouchableOpacity>*/}
        {/*    </View>;*/}
        {/*  })}*/}

        {/*</Animated.View>*/}


      </View>

    </>;
    ;
  };


  render() {
    const {style} = this.props;

    return (
      <FlatList style={{...style}} data={dataTest} renderItem={item => this.renderItem(item)}/>
    );
  }
}


const styles = EStyleSheet.create({
  shadow: {
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  itemContainer: {


    backgroundColor: '$white',
    borderRadius: 10,

    //marginHorizontal: 10,
    marginBottom: 10,
  }
  ,
});

export default MealsList;
