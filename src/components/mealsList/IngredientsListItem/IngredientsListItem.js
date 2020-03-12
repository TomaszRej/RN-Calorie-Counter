import React,  {useState, useEffect, useRef} from 'react';
import {Transitioning, Transition} from 'react-native-reanimated';
import {TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from '../../text/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IngredientsListItem = ({index, ingredient, onDelete}) => {
  const transition = <Transition.Change interpolation="easeInOut"/>;

  const [p, setP] = useState(0);
  const ref = useRef();


  useEffect(() => {
    console.log('start')
    debugger


    return () => {
      console.log('animation');
      debugger
    }
  }, []);

  const handleDelete = (id) => {
    onDelete(id);
    console.log("delet")
  };

  return (

    <Transitioning.View
      transition={transition}
      ref={ref}
      style={{
        backgroundColor: index % 2 === 0 ? EStyleSheet.value('$gray') : EStyleSheet.value('$white'),
        flexDirection: 'row',
        justifyContent: 'space-between',

        height: 50,
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
    </Transitioning.View>
  );
};

export default IngredientsListItem;
