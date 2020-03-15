import React from 'react';
import Animated from 'react-native-reanimated';
// @ts-ignore
import IngredientsListItem from 'components/mealsList/ingredientsListItem/IngredientsListItem.tsx';

const ITEM_HEIGHT = 50;
interface IngredientValue {
  [id: number]: Animated.Value<number>;
}
interface AnimatedOpenValue {
  [id: number]: {
    value: Animated.Value<number>;
    isOpen: boolean;
    ingredients: IngredientValue[] | object;
    initialLength: number;
  };
}

interface IngredientsListProps {
  ingredients: object[];
  onDelete: Function;
  id: number;
  animatedShowValue: Animated.Value<number>;
  animatedState: AnimatedOpenValue;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  onDelete,
  id,
  animatedShowValue,
  animatedState,
}) => {
  const handleDelete = (id: number) => {
    typeof onDelete === 'function' && onDelete(id);
  };

  return (
    <Animated.View
      style={{
        height: animatedShowValue?.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ITEM_HEIGHT * ingredients.length],
        }),
      }}>
      {ingredients?.map((ingredient, index) => {
        return (
          <IngredientsListItem
            animatedState={animatedState}
            id={id}
            onDelete={handleDelete}
            ingredient={ingredient}
            index={index}
          />
        );
      })}
    </Animated.View>
  );
};

export default IngredientsList;
