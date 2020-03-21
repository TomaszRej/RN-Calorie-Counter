import React, {Component, useState, useEffect, useRef} from 'react';
import Animated, {Easing, timing, Value} from 'react-native-reanimated';
import {TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// @ts-ignore
import {Text} from 'components/text/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ITEM_HEIGHT = 50;

interface AnimatedOpenValue {
  [id: number]: {
    value: Animated.Value<number>;
    isOpen: boolean;
    ingredients: {[id: number]: Animated.Value<number>};
    initialLength: number;
  };
}

interface IngredientsListItemProps {
  index: number;
  ingredient: {id: number; value: string};
  id: number;
  onDelete: Function;
  animatedState: AnimatedOpenValue;
}

const IngredientsListItem: React.FC<IngredientsListItemProps> = ({
  index,
  ingredient,
  id,
  onDelete,
  animatedState,
}) => {
    
    
  const handleDelete = (id: number) => {
    typeof onDelete === 'function' && onDelete(id);
  };

  return (
    <View
      style={{
        backgroundColor:
          index % 2 === 0
            ? EStyleSheet.value('$lightGray')
            : EStyleSheet.value('$white'),
      }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: animatedState[id]?.ingredients[ingredient?.id]?.interpolate({
            inputRange: [0, 1],
            outputRange: [0, ITEM_HEIGHT],
          }),
        }}>
        <View>
          <Text>{ingredient?.value}</Text>
          <Text>{ingredient?.id}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: EStyleSheet.value('$gray'),
            borderWidth: 3,
            borderRadius: 10,
            margin: 15,
            height: 35,
            width: 35,
            justifyContent: 'center',
            alignItems: 'center'
        

          }}
          onPress={() => handleDelete(ingredient.id)}>
          <Icon
          
            name="close"
            size={20}
            color={EStyleSheet.value('$gray')}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default IngredientsListItem;
