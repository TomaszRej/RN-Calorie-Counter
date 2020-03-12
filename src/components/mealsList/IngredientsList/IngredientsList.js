import React, {useEffect, useState} from 'react';
import Animated, {multiply} from 'react-native-reanimated';
import {TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from 'src/components/text/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Transitioning, Transition} from 'react-native-reanimated';

import IngredientsListItem from "src/components/mealsList/IngredientsListItem/IngredientsListItem";

const ITEM_HEIGHT = 50;

const IngredientsList = ({ingredients, onDelete, values, id, animatedShowValue}) => {



  const handleDelete = (id) => {
    typeof onDelete === 'function' && onDelete(id);
  };

  return (
    <Animated.View style={
      {

        height: animatedShowValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ITEM_HEIGHT * ingredients.length],

        }),
      //multiply(values[id], ingredients.length +1),
      //   multiply(30, ingredients.length ),
    }
    }>

      {ingredients.map((ingredient, index) => {
        return <IngredientsListItem onDelete={handleDelete} ingredient={ingredient} index={index}/>
      })}

    </Animated.View>
  );
};

export default IngredientsList;
