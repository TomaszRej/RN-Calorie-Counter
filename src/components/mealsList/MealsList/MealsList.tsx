import React from 'react';
import {FlatList, TouchableOpacity, View, Image} from 'react-native';
import {Text} from 'src/components/text/Text';
import Animated, {Value, timing, Easing, multiply, sub, concat, divide, add} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import IngredientsList from 'src/components/mealsList/IngredientsList/IngredientsList';


class MealsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedOpenValues: {},
      data: [],
    };
  }


  componentDidMount() {
    let animatedOpenValues = {};

    for (const item of this.props.data) {
      const ingredients = {};
      for (const ingredient of item.ingredients) {
        ingredients[ingredient.id] = new Value(1);
      }

      animatedOpenValues[item.id] = {
        value: new Value(0),
        isOpen: false,
        ingredients: ingredients,
        initialLength: item.ingredients.length,
      };
    }

    this.setState({
      animatedOpenValues: animatedOpenValues,
      data: this.props.data

    });
  }

  toggleShow(id) {
    const newAnimatedOpenValues = {...this.state.animatedOpenValues};
    newAnimatedOpenValues[id].isOpen = !newAnimatedOpenValues[id].isOpen;

    this.setState({
      animatedOpenValues: newAnimatedOpenValues,
    }, () => {
      const config = {
        duration: 250,
        toValue: this.state.animatedOpenValues[id].isOpen ? 1 : 0,
        easing: Easing.inOut(Easing.ease),
      };

      timing(this.state.animatedOpenValues[id].value, config).start();
    });
  }

  handleOnPress = (item) => {
    this.toggleShow(item.id);
  };


  handleDeleteIngredient(itemId, ingredientId, length) {
    const meals = [...this.state.data];
    const newData = meals.map(item => {
      if (item.id === itemId) {
        item.ingredients = item.ingredients.filter(ingredient => ingredient.id !== ingredientId);
      }
      return item;
    });

    this._config = {
      duration: 260,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animatedOpenValues[itemId].ingredients[ingredientId], this._config).start();


    const initLength = this.state.animatedOpenValues[itemId].initialLength;

    this._config2 = {
      duration: 250,
      toValue: 1 - ((1 / initLength) * (initLength - (length - 1))),
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.state.animatedOpenValues[itemId].value, this._config2).start(() => {

      // this.setState({
      //   data: newData,
      // });
    });


  }

  renderItem = ({item}) => {

    return <>
      <View
        style={[styles.shadow, styles.itemContainer]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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
        <IngredientsList animatedShowValue={this.state.animatedOpenValues[item.id]?.value}
                         animatedState={this.state.animatedOpenValues}
                         id={item?.id}
                         ingredients={item?.ingredients}
                         onDelete={(id) => this.handleDeleteIngredient(item.id, id, item.ingredients.length)}/>
      </View>
    </>;
  };


  render() {
    const {style, data} = this.props;

    return (
      <FlatList style={{...style}} data={data} renderItem={item => this.renderItem(item)}/>
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
    overflow: 'hidden',
    marginBottom: 10,
  },
});

export default MealsList;
