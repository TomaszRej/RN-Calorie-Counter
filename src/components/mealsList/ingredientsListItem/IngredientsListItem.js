import React, {Component, useState, useEffect, useRef} from 'react';
import Animated, {Easing, timing, Value} from 'react-native-reanimated';
import {TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from '../../text/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ITEM_HEIGHT = 50;

const IngredientsListItem = ({index, ingredient, animatedShowValue, id, onDelete, animatedState}) => {

  const handleDelete = (id) => {
    typeof onDelete === 'function' && onDelete(id);
  };


  return (
    <View style={{backgroundColor: index % 2 === 0 ? EStyleSheet.value('$lightGray') : EStyleSheet.value('$white')}}>
      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: animatedState[id]?.ingredients[ingredient.id]?.interpolate({
            inputRange: [0, 1],
            outputRange: [0, ITEM_HEIGHT],
          }),
        }}>
        <View>
          <Text>{ingredient?.value}</Text>
          <Text>{ingredient?.id}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDelete(ingredient.id)}>
          <Icon name="close" size={30} color="blue"/>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default IngredientsListItem;

