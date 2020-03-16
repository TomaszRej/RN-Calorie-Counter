import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ListRenderItemInfo,
} from 'react-native';
// @ts-ignore
import {Text} from 'components/text/Text';
import Animated, {
  Value,
  timing,
  Easing,

} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
// @ts-ignore
import IngredientsList from 'components/mealsList/ingredientsList/IngredientsList.tsx';
// @ts-ignore
import MealsListItem from 'components/mealsList/mealsListItem/MealsListItem.tsx';


interface IngredientValue {
  [id: number]: Animated.Value<number>;
}
interface Meal {
  id: number;
  mealTitle: string;
  totalCalories: number;
  ingredients: {id: number, value: string}[]
}


interface AnimatedOpenValue {
  [id: number]: {
    value: Animated.Value<number>;
    isOpen: boolean;
    ingredients: { [id: number]: Animated.Value<number> };
    initialLength: number;
  };
}

interface MealsListProps {
  data: Meal[];
  style: object;
}

interface MealsListState {
  animatedOpenValues: AnimatedOpenValue;
  data: Meal[] ;
}

class MealsList extends React.Component<MealsListProps, MealsListState> {
  constructor(props: MealsListProps) {
    super(props);

    this.state = {
      animatedOpenValues: {},
      data: [],
    };
  }

  componentDidMount() {
    let animatedOpenValues: AnimatedOpenValue = {};

    for (const item of this.props.data) {
      const ingredients: IngredientValue = {};
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
      data: this.props.data,
    });
  }

  toggleShow(id: number) {
    const newAnimatedOpenValues = {...this.state.animatedOpenValues};
    newAnimatedOpenValues[id].isOpen = !newAnimatedOpenValues[id].isOpen;

    this.setState(
      {
        animatedOpenValues: newAnimatedOpenValues,
      },
      () => {
        const config = {
          duration: 250,
          toValue: this.state.animatedOpenValues[id].isOpen ? 1 : 0,
          easing: Easing.inOut(Easing.ease),
        };

        timing(this.state.animatedOpenValues[id].value, config).start();
      },
    );
  }

  handleOnPress = (item: Meal) => {
    this.toggleShow(item.id);
  };

  handleDeleteIngredient(itemId: number, ingredientId: number, length: number) {
    const meals = [...this.state.data];
    const newData = meals.map((item: Meal) => {
      if (item.id === itemId) {
        item.ingredients = item.ingredients.filter(
          ingredient => ingredient.id !== ingredientId,
        );
      }
      return item;
    });

    const config = {
      duration: 260,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const initLength = this.state.animatedOpenValues[itemId].initialLength;
    const config2 = {
      duration: 250,
      toValue: 1 - (1 / initLength) * (initLength - (length - 1)),
      easing: Easing.inOut(Easing.ease),
    };

      timing(
          this.state.animatedOpenValues[itemId].ingredients[ingredientId],
          config,
      ).start();

      timing(this.state.animatedOpenValues[itemId].value, config2).start(
          () => {
            // this.setState({
            //   data: newData,
            // });
          },
      );

  }

  renderItem = (element: ListRenderItemInfo<any>) => {
    const {item} = element;

    return (
      <MealsListItem
        onShowInnerList={() => this.handleOnPress(item)}
        item={item}>
        <IngredientsList
          animatedShowValue={this.state.animatedOpenValues[item.id]?.value}
          animatedState={this.state.animatedOpenValues}
          id={item.id}
          ingredients={item.ingredients}
          onDelete={(id: number) =>
            this.handleDeleteIngredient(item.id, id, item.ingredients.length)
          }
        />
      </MealsListItem>
    );
  };

  render() {
    const {style, data} = this.props;

    return (
      <FlatList
        style={{...style}}
        data={data}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}



export default MealsList;


