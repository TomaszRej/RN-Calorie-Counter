import React from 'react';
import Animated, {multiply} from 'react-native-reanimated';
import {TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from 'src/components/text/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MealsListItem = ({ingredients, onDelete, values, id}) => {

  const handleDelete = (id) => {
    typeof onDelete === 'function' && onDelete(id);
  };

  return (
    <Animated.View style={
      {



      height:
      multiply(values[id], ingredients.length +1),
    }
    }>

      {ingredients.map((ingredient, index) => {
        return <View
          style={{
            backgroundColor: index % 2 === 0 ? EStyleSheet.value('$gray') : EStyleSheet.value('$white'),
            flexDirection: 'row',
            justifyContent: 'space-between',

            borderStyle: 'dashed',

            // width: concat(this.state.animValues[item.id], '%'),
            // opacity: divide(this.state.animValues[item.id], 100),
          }}>
          <View>
            <Text>{ingredient.value}</Text>
            <Text>{ingredient.id}</Text>
          </View>

          <TouchableOpacity
            onPress={() => handleDelete(ingredient.id)}>
            <Icon name="close" size={30} color="blue"/>
          </TouchableOpacity>
        </View>;
      })}

    </Animated.View>
  );
};

export default MealsListItem;
