import React from 'react';
import Animated from 'react-native-reanimated';


import IngredientsListItem from 'src/components/mealsList/ingredientsListItem/IngredientsListItem';

const ITEM_HEIGHT = 50;

const IngredientsList = ({ingredients, onDelete, id, animatedShowValue, animatedState}) => {


  const handleDelete = (id) => {
    typeof onDelete === 'function' && onDelete(id);
  };

  return (
    <Animated.View style={{
      height: animatedShowValue?.interpolate({
        inputRange: [0, 1],
        outputRange: [0, ITEM_HEIGHT * ingredients.length],

      }),

    }}>

      {ingredients?.map((ingredient, index) => {
        return <IngredientsListItem
          animatedState={animatedState}
          id={id}
          onDelete={handleDelete}
          ingredient={ingredient}
          index={index}/>;
      })}

    </Animated.View>
  );
};

export default IngredientsList;
